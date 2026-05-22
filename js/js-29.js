//-----1----
//Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
//<div id="text"> зникав.

// const text = document.getElementById("text");
// const button = document.getElementById("button");

// button.addEventListener("click", hide);
// function hide() {
//   text.style.display = "none";
// }

//-----2----
//Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const button = document.getElementById("button");
// button.addEventListener("click", hide);

// function hide() {
//   button.style.display = "none";
// }
//-----3----
//Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const block = document.querySelector(".div.level-1");
// const child = block.querySelectorAll(":scope > .div");

// block.addEventListener("click", showTree);

// function showTree() {
//   child.forEach((item) => {
//     if (item.style.display === "none") {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }
