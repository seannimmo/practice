class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell() {
        this.quantity = this.quantity - 1;
    }

    store(count) {
        this.quantity = this.quantity + count;
    }
}

const iPhone = new Product("iPhone", "$1000", 200);
const charger = new Product('Charger', '$20',300);
const earbuds = new Product('Earbuds', "$100", 500);

let products = [iPhone, charger, earbuds];

const createNode = (list, i) => {
    const item = document.createElement('div');
    item.className = "product";
    item.innerHTML = (
    `<div id= "${products[i]}">Product: ${products[i].name} Price: ${products[i].price} In Stock: ${products[i].quantity}</div>
    <input id="bttn-${products[i].name}" type="button" class="bttn" value="Buy!">`
    )
    return item;
}

const update = () => {
    const list = document.querySelector('#list');

    for(i = 0; i < products.length; i++) {
        let item = createNode(list, i);

        list.appendChild(item);
        
    }
}

const onBuy = purchase => {
    purchase.quantity = purchase.quantity - 1;
    console.log(purchase.quantity);
    const item = document.querySelector(purchase);
    


    
}

update();
    const bttn1 = document.querySelector("#bttn-iPhone");
    const bttn2 = document.querySelector("#bttn-Charger");
    const bttn3 = document.querySelector("#bttn-Earbuds");
    bttn1.addEventListener('click', function() { onBuy(iPhone);});
    bttn2.addEventListener('click',function() {onBuy(charger);});
    bttn3.addEventListener('click',function() {onBuy(earbuds);});
    console.log(iPhone);