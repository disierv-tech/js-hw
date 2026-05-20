// //Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// //методами:
// //read() запитує два значення за допомогою prompt і запам’ятовує їх у
// //властивостях об’єкта.
// //sum() повертає суму цих властивостей.
// //mul() повертає результат множення даних властивостей

// function Calculator() {
//   this.read = function () {
//     this.a = Number(prompt("Вкажіть перше число"));
//     this.b = Number(prompt("Вкажіть друге число"));
//     return `Введені значення: ${this.a} та ${this.b}`;
//   };
//   this.sum = function () {
//     let sum = this.a + this.b;
//     return sum;
//   };

//   this.mul = function () {
//     let mul = this.a * this.b;
//     return mul;
//   };
// }

// const Calculator1 = new Calculator();

// Calculator1.read();
// console.log(Calculator1.sum());
// console.log(Calculator1.mul());
