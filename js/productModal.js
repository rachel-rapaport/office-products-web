import data from './cards-collections.json' with { type: 'json' };

export default function openModal(id, category) {
  // find the current item
  let product = data[category].find(item => item.catalogId === id);
  console.log(product);
  // make the modal visible
  let modal = document.getElementsByClassName('modal')[0];
  modal.style.display = "flex";
  // create and append modal elements
  let modalProduct = document.getElementsByClassName('productModal')[0];
  let text = document.createElement('div');
  text.id = 'text';

  if (product.title) {
    let title = document.createElement('p')
    title.innerHTML = product.title;
    text.appendChild(title);
  }
  if (product.price) {
    let price = document.createElement('span');
    price.innerHTML = `מחיר: ${product.price}  ₪`;
    text.appendChild(price);
  }
  // 'text' contains the title and price
  modalProduct.appendChild(text);

  if (product.image) {
    let image = document.createElement('img')
    image.src = product.image;
    modalProduct.appendChild(image)
  }
}

// close the modal - called from button
export function closeModal() {
  // make the modal invisible
  let modal = document.getElementsByClassName('modal')[0];
  modal.style.display = "none";
  // delete the elements to prevent double content
  let parent = document.querySelector('.productModal');
  let image = parent.querySelector('img');
  let price = parent.querySelector('span');
  let title = parent.querySelector('p');
  if (image) image.remove();
  if (price) price.remove();
  if (title) title.remove();

}
window.openModal = openModal;
// makes the closeModal function global
window.closeModal = closeModal;

// close the model when clicking out of the modal
window.onclick = function (event) {
  let modal = document.getElementsByClassName('modal')[0];
  if (event.target == modal) {
    closeModal();
  }
}