import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32190498-c060c2ff03edf94bf531f7f07';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getPhotos = async (q, page) => {
  const config = {
    params: {
      key: API_KEY,
      image_type: 'photo',
      q,
      page,
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
    },
  };

  const response = await instance.get('/', config);
  return response.data;
};