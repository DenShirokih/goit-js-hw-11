import refs from './refs';
import imgServise from './img-search-servise';
import createCardImg from './update-img-markup';

const searchImages = event => {
  event.preventDefault();

  const form = event.currentTarget;
  imgServise.query = form.elements.searchQuery.value;
  refs.cardContainer.innerHTML = '';

  imgServise.restPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  imgServise
    .fetchImg()
    .then(data => {
      createCardImg(data);
      refs.loadMoreBtn.classList.remove('is-hidden');
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
  form.reset();
};

refs.searchForm.addEventListener('submit', searchImages);

refs.loadMoreBtn.addEventListener('click', () => {
  imgServise.fetchImg().then(createCardImg);
});
