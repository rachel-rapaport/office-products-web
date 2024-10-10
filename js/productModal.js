// {
//     catalogId: 82,
//     title: "ספירלה 2 נושא שורות - 1יח",
//     price: 9.9,
//     image: "/imgs/notebooks/iq2sub.jpg",
//     tags: ["rows", "2sub", "a4", "spiral"]
// }

function openModal(product){
   let modal = document.getElementsByClassName('modal')[0];
   modal.style.display = "block";

   const background= document.getElementsByClassName('background')[0];
   background.style.background= 'transparent';
   
}

function closeModal(){
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementsByClassName('modal')[0];
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }