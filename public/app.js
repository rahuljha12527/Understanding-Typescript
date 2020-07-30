"use strict";
// classes
var Invoice = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
var invoice = [];
invoice.push(invOne);
invoice.push(invTwo);
invoice.forEach(function (inv) {
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
var form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
