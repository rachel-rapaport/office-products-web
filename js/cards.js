import data from './cards-collections.json' with { type: 'json' };

const categories = [{ id: 0, name: "notebooks", collection: data.notebooks }, { id: 1, name: "craft", collection: data.craft }]

function createCards(categoryId) {
    let cardList = document.querySelector("#card-list");
    const category = categories.find(category => category.id == categoryId);
    const collection = category ? category.collection : [];

    const card = collection.map(card => {
        return `<article>
            <h2>${card.title}</h2>
            <img class="img-card" src="${card.image}" alt="${card.title}"></img>
            <span class="cart-price">            
            <p id="price">₪${card.price}</p>
            <span class="cart" title="הוספה לסל"><i class="iconify" data-icon="mynaui:cart-solid"></i></span>
            </span>
        </article > `
    }).join('');

    cardList.innerHTML += card;

    let cartButtons = document.querySelectorAll(".cart");
    cartButtons.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

function addToCart() {
    alert("addToCart");
}

// function openModal(card) {
//     // need to be filled
// }

window.onload = createCards(0);