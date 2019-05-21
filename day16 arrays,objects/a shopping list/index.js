let shopping = ['apples', 'oranges', 'bread', 'butter', 'milk'];

const item = {
    name: ['apples', 'oranges'] ,
    amount: '2kg',
};

const course = {
    title: 'Intro to Javascript', 
    dates: ['12.5', '15.5', '21.6'],
    lecturer: 'Martin', 
    mentors: [
        {name: 'Slavo', rank: 1},
        {name: 'Jan', rank: 2},
    ],
    venue: "street 21",
    capacity: 25,
}

const update = () =>{
    const list=document.querySelector('#list');
    list.innerHTML = 'Shopping List';
    console.log('shopping');

    for (let i=0; i < shopping.length; i++) {
        console.log(shopping[i]);
        let item = document.createElement('div');
        item.className="item";
        item.innerHTML=`<strong>${shopping[i]}</strong>`;
        list.appendChild(item);
        console.log(item);
    }
}

const addItem = () => {

}

update();
let onAdd = document.querySelector(".onAdd");
let newItem = onAdd.value;

const bttn = document.querySelector('.bttn');
bttn.addEventListener('click', addItem);
console.log(newItem);

document.addEventListener('DOMContentLoaded', () => {
    update();

});