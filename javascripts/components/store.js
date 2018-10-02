import {printToDom} from '../helpers/util.js';

let handmaidsTale = {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    cover: "https://images-na.ssl-images-amazon.com/images/I/518GwHMsHcL._SX322_BO1,204,203,200_.jpg",
    price: "$19.99"
};

const stringBuilder = () => {
 let newString = "";
    // for (let i = 0; i < handmaidsTale.length; i++) {
     newString += `<div class="col-2" id ='bookCard>`;
     newString += `<div>`;
     newString += `<h4>${handmaidsTale.title}</h4>`;
     newString += `<h6>${handmaidsTale.author}</h6>`;
     newString += `<img src=${handmaidsTale.cover}></img>`;
     newString += `<p>${handmaidsTale.price}</p>`;
     newString += `</div>`
     newString += `</div>`
     printToDom(newString, 'bookInfo');
    // };
};

export {stringBuilder};