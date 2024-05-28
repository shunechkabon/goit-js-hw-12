'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let lightbox;

export function displayImages(images, gallery) {
  const markup = images.map(image => {
    return `
      <li>
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
          <p><span>Likes:</span> ${image.likes}</p>
          <p><span>Views:</span> ${image.views}</p>
          <p><span>Comments:</span> ${image.comments}</p>
          <p><span>Downloads:</span> ${image.downloads}</p>
        </div>
      </li>
    `;
  }).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    
    if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('#gallery a', {});
  }
}

export function showLoader(loader) {
  loader.style.display = 'block';
}

export function hideLoader(loader) {
  loader.style.display = 'none';
}

export function showError(message) {
  iziToast.error({ message });
}

export function showWarning(message) {
  iziToast.warning({ message });
}

export function showLoadMoreButton(button) {
  button.style.display = 'block';
}

export function hideLoadMoreButton(button) {
  button.style.display = 'none';
}