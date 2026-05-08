// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   giveInfo: function () {
//     console.log(
//       `Я ${this.name}. Моя спеціальність: ${this.specialty}. Мій середній бал: ${this.averageScore}. Кількість пропущених уроків: ${this.missedLessons}.`,
//     );
//   },
// };

// const student1 = {
//   name: "Anna",
//   specialty: "chef",
//   averageScore: 8.1,
//   missedLessons: 3,
// };

// const student2 = {
//   name: "Oleg",
//   specialty: "dentist",
//   averageScore: 7.5,
//   missedLessons: 4,
// };

// const student3 = {
//   name: "Artem",
//   specialty: "marketer",
//   averageScore: 6.1,
//   missedLessons: 5,
// };

// studentInfo.giveInfo.call(student1);
// studentInfo.giveInfo.bind(student2)();
// studentInfo.giveInfo.apply(student3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const def = {
//   showDefinition() {
//     alert(`${this.name} - ${this.definition}`);
//   },
// };

// const htmlDefinition = {
//   name: "HTML",
//   definition:
//     "це основа створення вебсторінок, яка задає їхню структуру та вміст за допомогою системи тегів",
// };
// const cssDefinition = {
//   name: "CSS",
//   definition:
//     "це мова стилів, яка використовується для оформлення зовнішнього вигляду вебсторінок, написаних мовами розмітки",
// };

// document
//   .querySelector("#html")
//   .addEventListener("click", def.showDefinition.bind(htmlDefinition));

// document
//   .querySelector("#css")
//   .addEventListener("click", def.showDefinition.bind(cssDefinition));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = {
//   showResult() {
//     let sum = this.cost * this.weight;
//     console.log(`${this.name} коштує ${sum} грн`);
//   },
// };

// const banana = {
//   name: "banana",
//   cost: 30,
//   weight: 4.5,
// };

// const cherry = {
//   name: "cherry",
//   cost: 58,
//   weight: 1.3,
// };

// const orange = {
//   name: "orange",
//   cost: 89,
//   weight: 3.4,
// };

// shop.showResult.bind(banana)();
// shop.showResult.bind(cherry)();
// shop.showResult.bind(orange)();

// Якщо я неправильно зрозумів задачу і вона саме на прийняття параметрів функцією:

// function shop(name, cost, weight) {
//   const sum = cost * weight;
//   return `${name} коштує ${sum} грн`;
// }

// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("jrange", 89, 3.4));
