"use strict";

class Burger {
    constructor(size = {}, staffing = {}, addition = {}) {
        this.size = size;
        this.staffing = staffing;
        this.addition = addition;

        this.getSize();
        this.getStaffing();
        this.getAddition();
    }

    /**
     * Функция для получения по селектору выбора пользователя 
     * и выбор данных из соответствующего набора данных из файла
     * variables.js
     * @param {*} variable 
     * @param {*} selector 
     * @returns 
     */
    #getChoise(variable, selector) {
        let value = [];
        const choise = document.querySelectorAll(selector);
        choise.forEach(element => {
            if (element.checked) {
                if (variable == Addition) {
                    variable.forEach(el => {
                        if (el.title == element.id) {
                            value.push(el);
                        }
                    });
                } else {
                    variable.forEach(el => {
                        if (el.title == element.id) {
                            value = el;
                        }
                    });
                }
            }
        });
        return value;
    }

    /**
     * Функция получения начинки, выбранной пользователем
     */
    getStaffing() {
        this.staffing = this.#getChoise(Staffing, "input[name = staffing]");
    }

    /**
     * Функция получения размера бургера, выбранного пользователем
     */
    getSize() {
        this.size = this.#getChoise(Size, "input[name = size]");
    }

    /**
     * Функция получения дополнения, выбранного пользователем
     */
    getAddition() {
        this.addition = this.#getChoise(Addition, "input[name = addition]");
    }


    /**
     * 
     * @returns Функция подсчета общей цены заказанного бургера
     */
    getSummaryPrice() {
        let summaryPrice = this.size.price + this.staffing.price;
        if (this.addition) {
            this.addition.forEach(element => {
                summaryPrice += element.price;
            });
        }
        return summaryPrice;
    }

    /**
     * Функция подсчета общей калорийности бургера
     * @returns 
     */
    getSummaryCalories() {
        let summaryCalories = this.size.calorie + this.staffing.calorie;
        if (this.addition) {
            this.addition.forEach(element => {
                summaryCalories += element.calorie;
            });
        }
        return summaryCalories;
    }

    /**
     * Функция составления названия бургера,
     * в зависимости от выбора пользователя
     * @returns 
     */
    getOrderTitle() {
        let str = 'Ваш заказ:\n';
        str += `${this.size.russianTitle} бургер, начинка - ${this.staffing.russianTitle}`;
        console.log(this.addition);
        if (this.addition.length > 0) {
            str += ', дополнения:';
            if (this.addition.length == 1) {
                str += ` ${this.addition[0].russianTitle}\n`;
            } else {
                for (let i = 0; i < (this.addition.length - 1); i++) {
                    str += ` ${this.addition[i].russianTitle},`;
                }
                str += ` ${this.addition[(this.addition.length - 1)].russianTitle}\n`;
            }
        } else {
            str += '\n';
        }
        return str;
    }

    /**
     * Функция вывода заказа пользователя с общей
     * стоимостью и калорийностью
     */
    showOrder() {
        alert(`${this.getOrderTitle()}Цена заказа: ${this.getSummaryPrice()}\nОбщая калорийность: ${this.getSummaryCalories()}`);
    }






}