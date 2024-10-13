import data from './cards-collections.json' with { type: 'json' };
const categories = [{ id: 0, name: "notebooks", collection: data.notebooks }, { id: 1, name: "craft", collection: data.craft }]

function createCards(categoryId) {    
    if (categoryId === 0) {
        nootBook();
    } else {
        craft();
    }
    let cardList = document.querySelector("#card-list");
    const category = categories.find(category => category.id == categoryId);



    const collection = category ? category.collection : [];
    cardList.innerHTML="";


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
        
        cardElement.addEventListener('click', () => {
            openModal(card.catalogId, category.name);
        });

        cardList.appendChild(cardElement);

    }

)
    
}

window.createCards=createCards;

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

function cardFilter(filterId){
    let cardList = document.querySelector("#card-list");
    cardList.innerHTML="";
    const category =categories[0].collection;
    const collection=category.filter(category=>category.tags.includes(filterId))

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
window.cardFilter=cardFilter;

function nootBook(){
    const myNamePage=document.querySelector('.namePage');
    myNamePage.innerHTML="מחברות"
    const buttonFilter = document.querySelector('.button-filter');
    buttonFilter.style.display = 'block';
}

function craft(){
    const myNamePage=document.querySelector('.namePage');
    myNamePage.innerHTML="מלאכה"
    const buttonFilter = document.querySelector('.button-filter');
    buttonFilter.style.display = 'none';
}

window.onload = createCards(0);