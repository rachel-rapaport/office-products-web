import data from './cards-collections.json' with { type: 'json' };
import  openModal from '../js/productModal.js';
const categories = [{ id: 0, name: "notebooks", collection: data.notebooks }, { id: 1, name: "craft", collection: data.craft }]


function createCards(categoryId) {
    
    
    let cardList = document.querySelector("#card-list");
    const category = categories.find(category => category.id == categoryId);
    
    const collection = category ? category.collection : [];

<<<<<<< HEAD
    collection.forEach(card => {
        const cardElement = document.createElement('article');
        cardElement.innerHTML = `
            <h2>${card.title}</h2>
            <img class="img-card" src="${card.image}" alt="${card.title}"></img>
            <span class="cart-price">            
                <p id="price">₪${card.price}</p>
                <span class="cart-icon">
                    <i class="iconify" data-icon="mynaui:cart-solid"></i>
                </span>
            </span>`;

        const addToCartBtn = cardElement.querySelector('.cart-icon');
        addToCartBtn.addEventListener('click', () => addToCart(card));
=======
cardList.innerHTML='';

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

>>>>>>> origin/main

        cardList.appendChild(cardElement);
    })
}

<<<<<<< HEAD

function addToCart(item) {
    console.log("add to cart");

    let itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
    let itemIndex = itemsInCart.findIndex(element => element.item.catalogId === item.catalogId);

    let itemAmount = 1;

    if (itemIndex !== -1)
        itemsInCart[itemIndex].amount += itemAmount;
    else
        itemsInCart.push({ item: item, amount: itemAmount });

    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));

    const arr = JSON.parse(localStorage.getItem('itemsInCart'));
    console.log(arr);
}


=======
window.createCards = createCards;

function addToCart() {
    alert("addToCart");
}

>>>>>>> origin/main
window.onload = createCards(0);