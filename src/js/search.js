import refs from './refs';
import imgServise from './img-search-servise';
import createCardImg from './update-img-markup';

const searchImages = event => {
  event.preventDefault();

  const form = event.currentTarget;
  imgServise.query = form.elements.searchQuery.value;

  refs.cardContainer.innerHTML = '';
  form.reset();

  imgServise.restPage();
  refs.loadMoreBtn.classList.add('is-hidden');

  imgServise.fetchImg().then(createCardImg);
  refs.loadMoreBtn.classList.remove('is-hidden');
};

refs.searchForm.addEventListener('submit', searchImages);

refs.loadMoreBtn.addEventListener('click', () => {
  imgServise.fetchImg().then(createCardImg);
});
