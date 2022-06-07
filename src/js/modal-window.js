import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: '.card',
  secondaryZoomLevel: '1.5',
  pswpModule: () => import('photoswipe'),
});

export default lightbox;
