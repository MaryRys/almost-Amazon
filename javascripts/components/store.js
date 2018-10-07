import {printToDom} from '../helpers/util.js';
import {printCart} from './cart.js';

const handmaidsTale = {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    cover: "https://images-na.ssl-images-amazon.com/images/I/518GwHMsHcL._SX322_BO1,204,203,200_.jpg",
    price: "$19.99"
};

const stringBuilder = () => {
 let newString = "";
    newString += `<div class="card mx-auto" id="bookCard" style="width: 18rem;">`;
    newString +=    `<img src="${handmaidsTale.cover}">`;
    newString +=    `<div class="card-body">`;
    newString +=        `<h5 class="card-title">${handmaidsTale.title}</h5>`;
    newString +=        `<p class="card-text">${handmaidsTale.price}</p>`;
    newString +=    `</div>`;
    newString +=    `<button id="buyBtn">Add to Cart</button>`
    newString +=`</div>`;
 printToDom(newString, 'bookInfo');
};

const getPrice = () => {
    return handmaidsTale.price;
};

const buyEvent = () => {
    const buyBtnEvent = document.getElementById('buyBtn');
    buyBtnEvent.addEventListener('click', printCart);
};

export {handmaidsTale, stringBuilder, buyEvent, getPrice};