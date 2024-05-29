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
let totalHits = 0;
let perPage = 15;

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
        const { images, totalHits: fetchedTotalHits } = await fetchImages(currentQuery, currentPage);
        totalHits = fetchedTotalHits;
        hideLoader(loader);

        if (images.length === 0) {
        showWarning('Sorry, there are no images matching your search query. Please try again!');
        return;
        }

        displayImages(images, gallery);
        if (images.length < totalHits) {
            showLoadMoreButton(loadMoreBtn);
        }
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
        const { images } = await fetchImages(currentQuery, currentPage);
        hideLoader(loader);

        displayImages(images, gallery);

        const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });

        if (currentPage * perPage >= totalHits) {
            hideLoadMoreButton(loadMoreBtn);
            showWarning("We're sorry, but you've reached the end of search results.");
        }
    } catch (error) {
        hideLoader(loader);
        showError('Something went wrong. Please try again later.');
        console.error(error);
    }
});