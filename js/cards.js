import data from './cards-collections.json' with { type: 'json' };
const categories = [{ id: 0, name: "notebooks", collection: data.notebooks }, { id: 1, name: "craft", collection: data.craft }]


function createCards(categoryId) {

    let cardList = document.querySelector("#card-list");
    const category = categories.find(category => category.id == categoryId);

    const collection = category ? category.collection : [];

    collection.forEach(card => {
        const cardElement = document.createElement('article');
        cardElement.innerHTML = `
            <h2>${card.title}</h2>
            <img class="img-card" src="${card.image}" alt="${card.title}"></img>
            <span class="cart-price">            
                <p id="price">₪${card.price}</p>
                <span class="cart-icon" title="הוספה לסל">
                    <i class="iconify" data-icon="mynaui:cart-solid"></i>
                </span>
            </span>`;

        const addToCartBtn = cardElement.querySelector('.cart-icon');
        addToCartBtn.addEventListener('click', () => addToCart(card));

        cardList.appendChild(cardElement);
    })
}


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

window.onload = createCards(0);