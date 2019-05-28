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

const createChild = i => {
    const item = document.createElement('div');
    item.className = "item";
    item.innerHTML = (
        `<div id= "${products[i].name}">Product: ${products[i].name} Price: ${products[i].price} In Stock: ${products[i].quantity}</div>
        <input id="bttn-${products[i].name}" type="button" class="bttn" value="Buy!">`
    )
    return item;
}

const update = () => {
    const productList = document.querySelector('#list');

    for(i = 0; i < products.length; i++) {
        const item = createChild(i);

        productList.appendChild(item);
        
    }
}

const onBuy = i => {
    products[i].quantity = products[i].quantity - 1;
    console.log(products[i].quantity);
    console.log(products[i]);
    const item = document.querySelector(`#${products[i].name}`);
    const newChild = createChild(i);
    console.log(newChild);
    item.replaceWith(newChild, item);
    


    
}

update();
    const bttn1 = document.querySelector("#bttn-iPhone");
    const bttn2 = document.querySelector("#bttn-Charger");
    const bttn3 = document.querySelector("#bttn-Earbuds");
    bttn1.addEventListener('click', function() { onBuy(0);});
    bttn2.addEventListener('click',function() {onBuy(1);});
    bttn3.addEventListener('click',function() {onBuy(2);});
    console.log(iPhone);