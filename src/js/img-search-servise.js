import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.headers.common['Authorization'] =
  'Client-ID FrIM0DZAFAUoFGI6I46uhbEOgSLzGd-SyvdFm9HyfBQ';

export default {
  searchImg: '',
  page: 1,
  fetchImg() {
    const url = `?query=${this.query}&orientation=landscape&per_page=8&page=${this.page}`;
    return axios.get(url).then(res => {
      this.page += 1;
      return res.data.results;
    });
  },
  restPage() {
    this.page = 1;
  },
  get query() {
    return this.searchImg;
  },
  set query(value) {
    this.searchImg = value;
  },
};
