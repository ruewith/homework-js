let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function genTable(arr) {

let div = document.createElement("div");
let table = document.createElement("table");
table.border = 1;
table.cellPadding = 10;
let caption = table.createCaption();
caption.style = "font-size: 24px";
caption.innerText = "Заголовок таблицы";
for (let i = 0; i < arr.length; i++) 
{
let row = table.insertRow(i);
let arrValue = Object.values(arr[i]);
let arrKey = Object.getOwnPropertyNames(arr[i]);
for (n = 0; n < arrValue.length; n++)
{
  if (i == 0) {
  let cell = row.insertCell(n);
  cell.innerText = arrKey[n].toUpperCase();
  console.log(arrKey[n]);
  row.append(cell);
  } else 
  {
  let cell = row.insertCell(n);
  cell.innerText = arrValue[n];
  console.log(arrValue[n]);
  row.append(cell);
  }
 }
 
}

div.append(table);
document.body.prepend(div);
}
genTable(goods);