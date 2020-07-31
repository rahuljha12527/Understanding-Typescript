// // interfaces



// interface IsPerson{
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a:number):number;

// }

// const me: IsPerson={
//     name:'shaun',
//     age:30,
//     speak(text:string):void{
//         console.log(text);
//     },
//     spend(amount:number):number{
//         console.log('I spent',amount);
//         return amount;
//     }
// };

// let someone:IsPerson;

// const greetPerson=(person:IsPerson)=>{
//    console.log('hello',person.name);
// }

// greetPerson(me);
// classes
import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';


// let docOne:HasFormatter;
// let docTwo:HasFormatter;

// docOne=new Invoice('yoshi','web work',250);
// docTwo=new Payment('mario','plumbing work',200);

// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);




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


const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc:HasFormatter;
  if(type.value==='invoice'){
    doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);


  }
  else{
    doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
  }

  list.render(doc,type.value,'end');
//  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
