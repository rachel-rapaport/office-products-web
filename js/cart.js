function showCartItems() {
    let itemsContainer = document.querySelector("#item-list");

    const collection = JSON.parse(localStorage.getItem('itemsInCart'));

    document.querySelector("h1").innerHTML += collection.length; // display the amount of items in the cart

    collection.forEach(element => {
        const itemElement = document.createElement('article');
        itemElement.innerHTML = `
            <img class="img-card" src="${element.item.image}" alt="${element.item.title}"></img>
            <span id="item-text">
            <h2>${element.item.title}</h2>
                <span id="item-details">
                    <p>מחיר: ₪${element.item.price}</p>
                    <p>כמות: ${element.amount}</p>
                </span>
            </span>`;
        itemsContainer.appendChild(itemElement);
    })
}


function emptyCart() {
    localStorage.clear();
    location.reload();
}

window.onload = showCartItems();