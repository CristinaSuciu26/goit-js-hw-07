import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class='gallery__link' href='${image.original}'>
        <img class='gallery__image' 
        src='${image.preview}' 
        data-source='${image.original}' 
        alt='${image.description}'/>
    </a>`;
  gallery.append(listItemEl);
});

gallery.addEventListener("click", openImageInLightbox);

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  basicLightbox
    .create(
      `<img width='1400' height='900' src='${clickedOn.dataset.source}'/>`
    )
    .show();
}
