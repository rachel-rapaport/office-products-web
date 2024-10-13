import data from './cards-collections.json' with { type: 'json' };

export default function openModal(id,category){
    
   let product=  data[category].find(item => item.catalogId === id);
   console.log(product);
   
   let modal = document.getElementsByClassName('modal')[0];
   modal.style.display = "flex";

   let modalProduct = document.getElementsByClassName('productModal')[0];
   
   if(product.title){
    console.log(product.title);
    
   let title = document.createElement('p')
   title.innerHTML = product.title; 
    modalProduct.appendChild(title)
   }
   if(product.price){
    let price = document.createElement('span');
    price.innerHTML =  `מחיר: ${product.price}  ₪`;
    modalProduct.appendChild(price);
   }
   if(product.image){
    let image = document.createElement('img')
    image.src = product.image;
    modalProduct.appendChild(image)
   }


}

export function closeModal(){
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = "none";
    
    let parent = document.querySelector('.productModal'); 

    let image = parent.querySelector('img');
    let price = parent.querySelector('span');
    let title = parent.querySelector('p');

    if (image) image.remove();
    if (price) price.remove();
    if (title) title.remove();
    
}

window.closeModal = closeModal;


window.onclick = function(event) {
    let modal = document.getElementsByClassName('modal')[0];
    if (event.target == modal) {
      closeModal();
    }
  }