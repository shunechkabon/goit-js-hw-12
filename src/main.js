// Завдання — Пошук зображень

'use strict';

import { fetchImages } from './js/pixabay-api.js';
import { displayImages, showLoader, hideLoader, showError, showWarning, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const loadMoreBtn = document.getElementById('load-more');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    
    if (query === '') {
        showError('Please enter a search query!');
        return;
    }

    currentQuery = query;
    currentPage = 1;
    gallery.innerHTML = '';
    hideLoadMoreButton(loadMoreBtn);
    showLoader(loader);

    try {
        const data = await fetchImages(currentQuery, currentPage);
        hideLoader(loader);

        if (data.hits.length === 0) {
        showWarning('Sorry, there are no images matching your search query. Please try again!');
        return;
        }

        displayImages(data.hits, gallery);
        showLoadMoreButton(loadMoreBtn);
    } catch (error) {
        hideLoader(loader);
        showError('Something went wrong. Please try again later.');
        console.error(error);
    }
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    showLoader(loader);

    try {
        const data = await fetchImages(currentQuery, currentPage);
        hideLoader(loader);

    if (data.hits.length === 0) {
        showWarning("We're sorry, but you've reached the end of search results.");
        hideLoadMoreButton(loadMoreBtn);
        return;
    }

        displayImages(data.hits, gallery);
    
    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });

    } catch (error) {
        hideLoader(loader);
        showError('Something went wrong. Please try again later.');
        console.error(error);
    }
});