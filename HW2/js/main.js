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

for (var i = 1; i <= 100; i++) {
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

// Задача №3
