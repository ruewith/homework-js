//Задача №1

let arr = [1, 2, 3, 4, 6, 9, 5];

for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j <arr.length ; j++) {
        if ( i != j && arr[i] + arr[j] == 7) {
            console.log(arr[i] + " + " + arr[j] + " = 7.");
        }
    }
}

//Задача №2

for (let i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("ThreeFive")
    } else if(i%3 == 0) {
        console.log("Three");
    } else if (i%5 ==0) {
        console.log("Five");
    } else {
        console.log(i);
    }
}

//Задача №3
let plateQty = parseInt(prompt("Количество тарелок: ", ""));

let cleanserQty = parseFloat(prompt("Количество моющего средства: ", ""));

let clearPlate = 0;

do {
    ++clearPlate;
    console.log("Осталось моющего средства = " + cleanserQty);
    plateQty--;
    cleanserQty -= .5;
} while (cleanserQty > 0 && plateQty > 0);

if (plateQty === 0 && cleanserQty === 0) {
    console.log("Все тарелки вымыты и все средство закончилось, чистых тарелок: " + clearPlate);
} else if (cleanserQty === 0) {
    console.log("Моющее средство закончилось,тарелок осталось:" + plateQty +", чистых тарелок: " + clearPlate);
} else if (plateQty === 0){
    console.log("Тарелки кончились, моющего средства осталось: " + cleanserQty + ", чистых тарелок: " + clearPlate);
}

//Задача № 4

let arr1 = [7, 4, 9, 11, 19];

let arr2 = [5, 7, 1, 4, 22];

let mean1 = 0;
let mean2 = 0;

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}

mean1 = sum1/arr1.length;
mean2 = sum2/arr2.length;

if (mean1>mean2) {
    console.log("Среднее арифметическое первого массива больше");
} else if (mean1<mean2) {
    console.log("Среднее арифметическое второго массива больше");
} else { console.log("Средние арифметические массивов равны"); }

// Задача №5.1

let numArr = parseInt(prompt("Количесво элементов массива: ", 1));
let stepArr = parseInt(prompt("Шаг массива: ", 1));

function makeReversArr(numArr, stepArк){
    let arr = [];
    let revers = [];
    let step = stepArr;
    for (let i = 0; i < numArr; i++) {
        arr[i]= step;
        step += stepArr;
    }
    for (let i = arr.length-1, j=0; i >= 0; i--,j++) {
        revers[j] = arr[i];
    }
    return revers;
}
console.log(makeReversArr(numArr, stepArr));

// Задача №5.2

n=1;

for (let i = 1; i <=20; i++) {
    n+=n;
    console.log(n);
}


//Задача № 5.3

let qty = parseInt(prompt("Количесво", ""));

let str = "";

for (let i = 0; i < qty; i++) {
    str += "#";
    console.log(str);
}
