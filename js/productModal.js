function openModal(product){
    product = {
        catalogId: 82,
          title: "ספירלה 2 נושא שורות - 1יח",
            price: 9.9,
             image: "../images/image.jpg",
              tags: ["rows", "2sub", "a4", "spiral"]
        
       }
   let modal = document.getElementsByClassName('modal')[0];
   modal.style.display = "flex";

   let modalProduct = document.getElementsByClassName('productModal')[0];
   
   if(product.title){
   let title = document.createElement('p')
   title.innerHTML = product.title; 
    modalProduct.appendChild(title)
   }
   if(product.price){
    let price = document.createElement('span');
    price.innerHTML =  `מחיר: ${product.price}  ש"ח`;
    modalProduct.appendChild(price);
   }
   if(product.image){
    let image = document.createElement('img')
    image.src = product.image;
    modalProduct.appendChild(image)
   }


}

function closeModal(){
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = "none";
    
    // prevent duplicate of display when opening again
    let parent = document.querySelector('.productModal'); 
    let buttonToKeep = parent.querySelector('button'); 
    // let keep= parent.querySelector('#add');
    
    Array.from(parent.children).forEach(child => {
        if (child !== buttonToKeep|| child!==keep) {
            parent.removeChild(child); 
        }
    });
    

}

window.onclick = function(event) {
    let modal = document.getElementsByClassName('modal')[0];
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }