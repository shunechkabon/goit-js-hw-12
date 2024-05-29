'use strict';

import axios from 'axios';

const apiKey = '44033175-ed9824b2e45f2d60c01451c92';
const perPage = 15;

export async function fetchImages(query, page = 1) {
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;
    try {
        const response = await axios.get(url);
        return { images: response.data.hits, totalHits: response.data.totalHits };
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}