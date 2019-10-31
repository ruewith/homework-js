// Задача №1

let x = parseInt(prompt("Введите целое число:", ""));

let result = x % 2 == 0 ? "Число четное" : "Число нечетное"

console.log(result);

// Задача №2

let ten = 10;

let first = parseFloat(prompt("Введите первое число:", ""));

let second = parseFloat(prompt("Введите второе число:", ""));

if (Math.abs(ten - first) < Math.abs(ten - second)) {
    console.log("Первое число ближе к 10");
} else if(Math.abs(ten - first) > Math.abs(ten - second)){
    console.log("Второе число ближе к 10");
} else { console.log("Числа одинаково удалены от 10");}

// Задача №3

let a = parseInt(prompt("Введите длину:", ""));
let b = parseInt(prompt("Введите ширину:", ""));
let c = parseInt(prompt("Введите высоту:", ""));

let area = 2*(a*b + b*c + a*c);

console.log("Площадь параллелепипеда:" + area);

if (b>c) {
    console.log("Ширина больше высоты");
} else if(b<c) {
    console.log("Высот больше ширины");
} else {
    console.log("Ширина и высота равны");
}
