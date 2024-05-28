'use strict';

const apiKey = '44033175-ed9824b2e45f2d60c01451c92';

export function fetchImages(query) {
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}