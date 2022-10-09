import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const cardsListMarkap = createImgCardsMarkap(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', cardsListMarkap);

function createImgCardsMarkap(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source ="${original}"
            alt="${description}"/>
            </a>
            </div>`
        })
        .join('')
};

console.log(cardsListMarkap);

galleryRef.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    };

    const imgUrl = evt.target.dataset.source;

    instance = basicLightbox.create(`
    <img src=${imgUrl}>`);

    instance.show();
    
    document.addEventListener('keydown', onEscCloseModal);
};

let instance;

function onEscCloseModal(evt) {
    if (evt.code === 'Escape') {
      instance.close(); 
    }
    
    document.removeEventListener('keydown', onEscCloseModal);  
};