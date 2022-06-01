import { Notify } from 'notiflix/build/notiflix-notify-aio';
const fetchNoResults = () => {
  Notify.failure(
    `Sorry, there are no images matching your search query. Please try again.`,
    {
      timeout: 3500,
      showOnlyTheLastOne: true,
      cssAnimation: true,
      // closeButton: true,
    },
  );
};

const fetchMoreResults = totalHits => {
  Notify.info(`Hooray! We found ${totalHits} images.`, {
    timeout: 3500,
    showOnlyTheLastOne: true,
    cssAnimation: true,
    // closeButton: true,
  });
};
export { fetchMoreResults, fetchNoResults };
