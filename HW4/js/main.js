//Задача №2
let cities = prompt("Введите названия: ", "");
let citiesArr = cities.split(" ");
let citiesSort = citiesArr.sort();

console.log(citiesSort);

//Задача №3 

let str = prompt("Введите строку: ", "");
let substr = prompt("Введите подстроку: ", "");

console.log(str, substr);
let pos = 0;
while (true) {
    let foundPos = str.indexOf(substr, pos);
    if (foundPos == -1) break;
  
    console.log( `Найдено: ${substr} на позиции: ${foundPos}` );
    pos = foundPos + 1; }

// Задача №4

let string = prompt("Введите строку: ", "")

function isPoly(string) {
    strMod = string.toLowerCase().replace(/\s/g, "");
    strRev = strMod.split("").reverse().join("");
    if (strMod === strRev) {
        return "Строка полиндром";
    }
    return "Строка не полиндром";
}

console.log(isPoly(string));

// Задача №5

let string2 = prompt("Введите строку: ", "");

function getMaxPoly(string) {
    for (let i = 0; i < string.length; i++) {
      let substr = string.slice(i, string.length);
      let modStr = substr.toLowerCase().replace(/\s+/g, "");
      let strRev = modStr.split('').reverse().join('');
      if (modStr === strRev) {
          return "Самый длинный полиндром: " + substr; 
        }
      }
    }

console.log(getMaxPoly(string2));
