import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/icon.svg';

const box = document.querySelector('.gallery');
const load = document.querySelector('.load');
const addMoreButton = document.querySelector('.to-add');
const iziOption = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  iconUrl: errorIcon,
  transitionIn: 'bounceInLeft',
  position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

export function addLoadStroke(daddyElement) {
  daddyElement.insertAdjacentHTML(
    'beforeend',
    '<p class="loading-text">Зачекайте, зображення завантажується...</p><span class="loader"></span>'
  );
  addMoreButton.classList.add('disappear');
}

export function removeLoadStroke(daddyElement) {
  const textElement = daddyElement.querySelector('.loading-text');
  const loaderElement = daddyElement.querySelector('.loader');

  if (textElement) textElement.remove();
  if (loaderElement) loaderElement.remove();

  addMoreButton.classList.remove('disappear');
}

export function markup(data) {
  const { hits } = data;

  if (hits.length === 0) {
    iziToast.show({
      ...iziOption,
      message:
        'На жаль, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка, спробуйте ще раз!',
    });
    box.innerHTML = '';

    return;
  }
  const markup = hits
    .map(
      image =>
        `<li class='gallery__item'>
        <a class='gallery__link' href="${image.largeImageURL}">
        <img class='gallery__img' src="${image.webformatURL}" alt="${image.tags}" />
          <div class="grid">
            <p>Likes</p>
            <p>Views</p>
            <p>Comment</p>
            <p>Downloads</p>
            <span>${image.likes}</span>
            <span>${image.views}</span>
            <span>${image.comments}</span>
            <span>${image.downloads}</span>
          </div>
        </a>
      </li>`
    )
    .join(' ');
  removeLoadStroke(load);
  box.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 200,
  });
  lightbox.refresh();
}