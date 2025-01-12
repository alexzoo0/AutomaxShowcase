import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });


export const getReviews = () => API.get('/reviews');
export const createReview = (newReview) => API.post('/reviews', newReview);

