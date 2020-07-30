// classes
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
let invoice = [];
invoice.push(invOne);
invoice.push(invTwo);
invoice.forEach((inv) => {
    console.log("trtr", inv.client, inv.amount, inv.format());
});
//invOne.client = "yoshi";
invTwo.amount = 400;
console.log(invOne, invTwo);
// const anchor=document.querySelector('a')!;
// if(anchor){
// console.log(anchor);
// }
// const form=document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
