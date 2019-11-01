// //Задача №1
//
// let num = parseInt(prompt("Введите целое число: ",1));
//
// function findNumberSum(num){
//     if(num >= 1){
//         return (num%10) + findNumberSum(Math.trunc(num/10));
//     }
//     return 0;
// }
//
// console.log(findNumberSum(num));
//
// //Задача №2
// let start = parseInt(prompt("Начало массива: ", 1));
// let finish = parseInt(prompt("Конец массива: ", 1));
// let step = parseInt(prompt("Шаг массива: ", 1));
//
// function arrGen(start, finish, step=1) {
//     let arr = [];
//     for (var i = 0; start<finish; i++) {
//         arr[i] = start;
//         start += step;
//     }
//     return arr;
// }
//
// console.log(arrGen(start, finish, step));

// //Задача №3
//
// function days(count) {
//   if (
//     count % 10 == 0 ||
//     (count % 100 >= 5 && count % 100 <= 20) ||
//     count % 10 >= 5
//   ) {
//     return " Дней";
//   }
//   if (count % 10 == 1) return " День";
//   if (count % 100 < 5 || (count % 100 > 20 && count % 10 < 5)) {
//     return " Дня";
//   }
// }
//
// for (let i = 0; i <= 100; i++) {
//   console.log(i + days(i));
// }

//Задача №4
