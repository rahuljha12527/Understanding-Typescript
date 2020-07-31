// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshi', age: 45 });
//let docTwo=addUID('hello');
console.log(docOne.name);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'rahul' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['bread', 'milk', 'toilet roll']
};
console.log("ans", docThree, docFour);
// Enums
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
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    //  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi raj'];
let tup = ['hello', 40, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
student = ['chun-li', 23232];
