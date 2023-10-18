import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

// добавляю лішку зі змінами як шаблонний рядок
const galleryMarkup = galleryItems
  .map(
      ({ original, preview, description }) => {
          return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
      })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// чому ця функція не працює? спотикач - підключення бібліотеки!!!
galleryList.addEventListener('click', (event) => {//слухач по кліку
  event.preventDefault();//прибираю дію по дефолту
  if (event.target.nodeName !== 'IMG') return;//якщо це не зображення - ігнор всього подалбшого коду

  const largeImageURL = event.target.dataset.source;//дістати велике зображення
  const instance = basicLightbox.create(`<img src="${largeImageURL}" alt="Image description">`);//підключення бібліотеки для показу великого фото

  instance.show();//і сам показ великого фото
});
