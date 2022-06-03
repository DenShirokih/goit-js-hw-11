import handlebars from 'handlebars';
import imgCard from '../templates/img-card.hbs?raw';
import refs from './refs';

const createCardImg = value => {
  const markup = handlebars.compile(imgCard)(value);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
};

export default createCardImg;
