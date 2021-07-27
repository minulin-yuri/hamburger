"use strict";

let button = document.querySelector("button");
button.addEventListener("click", function () {
    let burger = new Burger;
    console.log(burger);
    burger.showOrder();
});
