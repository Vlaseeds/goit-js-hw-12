import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImageCard(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;

  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="image-info">
        <div class="image-info-item">
          <span>Likes</span>
          <small>${likes}</small>
        </div>
        <div class="image-info-item">
          <span>Views</span>
          <small>${views}</small>
        </div>
        <div class="image-info-item">
          <span>Comments</span>
          <small>${comments}</small>
        </div>
        <div class="image-info-item">
          <span>Downloads</span>
          <small>${downloads}</small>
        </div>
      </div>
    </li>
  `;
}

export function createGallery(images) {
  const markup = images.map(createImageCard).join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderWrapper.classList.add('show');
}

export function hideLoader() {
  loaderWrapper.classList.remove('show');
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}