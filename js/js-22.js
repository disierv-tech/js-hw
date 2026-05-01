// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// let num1 = 1;

// if (num1 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num2 = 0;

// if (num2 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num3 = -3;

// if (num3 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
// let word1 = "test";
// if (word1 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let word2 = "qwerty";
// if (word2 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let word3 = true;
// if (word3 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let num1 = 1;
// if (num1 > 10) {
//   num1 -= 5;
// } else if (num1 <= 10) {
//   num1 += 5;
// }
// console.log("num1", num1);

// let num2 = 10;
// if (num2 > 10) {
//   num2 -= 5;
// } else if (num2 <= 10) {
//   num2 += 5;
// }
// console.log("num2", num2);

// let num3 = 13;
// if (num3 > 10) {
//   num3 -= 5;
// } else if (num3 <= 10) {
//   num3 += 5;
// }
// console.log("num3", num3);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Вкажіть номер місяця від 1 до 12");
// let name;
// switch (month) {
//   case "1":
//     name = "січень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "2":
//     name = "лютий";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "3":
//     name = "березень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "4":
//     name = "квітень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "5":
//     name = "травень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "6":
//     name = "червень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "7":
//     name = "липень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "8":
//     name = "серпень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "9":
//     name = "вересень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "10":
//     name = "жовтень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "11":
//     name = "листопад";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   case "12":
//     name = "грудень";
//     alert(`${month} місяцем року є ${name}`);
//     break;

//   default:
//     alert("Введіть число від 1 до 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number1 = prompt("Вкажіть першу цифру трьохзначного числа");
// const number2 = prompt("Вкажіть другу цифру трьохзначного числа");
// const number3 = prompt("Вкажіть третю цифру трьохзначного числа");

// let final = number1 + number2 + number3;
// let sum = Number(number1) + Number(number2) + Number(number3);
// alert(`Сумою цифр троьхзначного числа ${final} є ${sum}`);
