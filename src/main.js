// Завдання — Пошук зображень

'use strict';

import { fetchImages } from './js/pixabay-api.js';
import { displayImages, showLoader, hideLoader, showError, showWarning } from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    
    if (query === '') {
        showError('Please enter a search query!');
        return;
    }

    gallery.innerHTML = '';
    showLoader(loader);

    fetchImages(query)
    .then(data => {
        hideLoader(loader);

        if (data.hits.length === 0) {
        showWarning('Sorry, there are no images matching your search query. Please try again!');
        return;
        }

        displayImages(data.hits, gallery);
    })
        
    .catch(error => {
        hideLoader(loader);
        showError('Something went wrong. Please try again later.');
        console.error(error);
        });
});