import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.headers.common['Authorization'] =
  'Client-ID FrIM0DZAFAUoFGI6I46uhbEOgSLzGd-SyvdFm9HyfBQ';

const fetchImg = (searchImg, page = 1) => {
  const url = `?query=${searchImg}&orientation=landscape&per_page=20&page=${page}`;
  return axios.get(url);
};

export default fetchImg;
