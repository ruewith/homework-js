//Задача №1

let num = parseInt(prompt("Введите целое число: ",1));

function findNumberSum(num){
    if(num >= 1){
        return (num%10) + findNumberSum(Math.trunc(num/10));
    }
    return 0;
}

console.log(findNumberSum(num));

//Задача №2
let start = parseInt(prompt("Начало массива: ", 1));
let finish = parseInt(prompt("Конец массива: ", 1));
let step = parseInt(prompt("Шаг массива: ", 1));

function arrGen(start, finish, step=1) {
    let arr = [];
    for (var i = 0; start<finish; i++) {
        arr[i] = start;
        start += step;
    }
    return arr;
}

console.log(arrGen(start, finish, step));

//Задача №3

function days(count) {
  if (
    count % 10 == 0 ||
    (count % 100 >= 5 && count % 100 <= 20) ||
    count % 10 >= 5
  ) {
    return " Дней";
  }
  if (count % 10 == 1) return " День";
  if (count % 100 < 5 || (count % 100 > 20 && count % 10 < 5)) {
    return " Дня";
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i + days(i));
}

// Задача №4
function genArr(){
    let arr =[];
    for (let i = 0; i < Math.ceil(Math.random()*10); i++){
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}

function sumArrElem(arr) {
    let sum = 0;

    for (var i = 0; i < arr.length; i++) {
       sum += arr[i];
    }

    return sum;
}

arr1 = genArr();
arr2 = genArr();
arr3 = genArr();
arr4 = genArr();
arr5 = genArr();
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

console.log("Наибольшаяя сумма элементов: " + Math.max(sumArrElem(arr1),sumArrElem(arr2),sumArrElem(arr3),sumArrElem(arr4),sumArrElem(arr5)))