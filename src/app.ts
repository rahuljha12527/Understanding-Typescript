// interfaces



interface IsPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;

}

const me: IsPerson={
    name:'shaun',
    age:30,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I spent',amount);
        return amount;
    }
};

console.log(me);
// classes
import {Invoice} from './classes/invoice.js';

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

console.log(invOne, invTwo);

let invoice: Invoice[] = [];
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

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
