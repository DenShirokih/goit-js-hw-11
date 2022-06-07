import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.headers.common['Authorization'] =
  'Client-ID cUdC6qyHeNPK4g1yIqgoUQJDrZItmpXky5cO5EcMN-A';

export default {
  isLoading: false,
  searchImg: '',
  page: 1,
  fetchImg() {
    this.isLoading = true;
    const url = `?query=${this.query}&orientation=squarish&per_page=20&page=${this.page}`;
    return axios
      .get(url)
      .then(res => {
        this.page += 1;
        return res.data;
      })
      .finally(() => {
        this.isLoading = false;
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
