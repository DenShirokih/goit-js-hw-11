import refs from './refs';
import imgServise from './img-search-servise';
import createCardImg from './update-img-markup';
import { fetchNoResults, fetchMoreResults } from './notifications';

const searchImages = event => {
  event.preventDefault();

  const form = event.currentTarget;
  imgServise.query = form.elements.searchQuery.value;
  refs.cardContainer.innerHTML = '';

  imgServise.restPage();
  fetchImages().then(fetchSucsess);
};

const fetchImages = () => {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');
  return imgServise.fetchImg().finally(data => {
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.spinner.classList.add('is-hidden');
    return data;
  });
};
const fetchSucsess = value => {
  if (value.results.length > 1) {
    fetchMoreResults(value.total);
    createCardImg(value.results);
  } else {
    fetchNoResults();
  }
};
const fetching = () => {
  fetchImages()
    .then(data => createCardImg(data.results))
    .then(io.observe(refs.loadMoreBtn));
};
refs.searchForm.addEventListener('submit', searchImages);
refs.loadMoreBtn.addEventListener('click', fetching);

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    fetching();
  });
};
const options = {
  rootMargin: '300px',
};
const io = new IntersectionObserver(onEntry, options);
