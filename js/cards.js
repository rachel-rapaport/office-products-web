import data from './cards-collections.json' with { type: 'json' };
import  openModal from '../js/productModal.js';
const categories = [{ id: 0, name: "notebooks", collection: data.notebooks }, { id: 1, name: "craft", collection: data.craft }]

function createCards(categoryId) {
    
    
    let cardList = document.querySelector("#card-list");
    const category = categories.find(category => category.id == categoryId);
    
    const collection = category ? category.collection : [];

    cardList.innerHTML="";

    const cards = collection.map(card => {
    
        const article = document.createElement('article');
        article.className = 'product';
        article.innerHTML = `
            <h2>${card.title}</h2>
            <img class="img-card" src="${card.image}" alt="${card.title}"></img>
            <span class="cart-price">            

            <p id="price">₪${card.price}</p>
            <span class="cart" title="הוספה לסל"><i class="iconify" data-icon="mynaui:cart-solid"></i></span>
        </span> `;

    article.addEventListener('click', () => {
        openModal(card.catalogId, category.name);
    });

    return article;
});
cards.forEach(card => cardList.appendChild(card));


    let cartButtons = document.querySelectorAll(".cart");
    cartButtons.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

window.createCards = createCards;

function addToCart() {
    alert("addToCart");
}

window.onload = createCards(0);