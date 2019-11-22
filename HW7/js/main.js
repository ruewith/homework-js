let articles = [
  {
    id: 1,
    title: "JS",
    text: "Статья про JS",
    author: "Александр"
  },
  {
    id: 2,
    title: "PHP",
    text: "Статья про PHP",
    author: "Виталий"
  },
  {
    id: 3,
    title: "Базы Данных",
    text: "Статья про Базы Данных",
    author: "Евгения"
  },
  {
    id: 4,
    title: "HTML",
    text: "Статья про HTML",
    author: "Виталий"
  }
];

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

// Задача №1
function genTable(arr) {
  let table = document.createElement("table");
  table.border = 1;
  table.cellPadding = 10;
  let caption = table.createCaption();
  caption.style = "font-size: 24px";
  caption.innerText = "Заголовок таблицы";
  let row = table.insertRow();
  for (let item in arr[0]) {
    let cell = document.createElement("th");
    cell.innerText = item.toUpperCase();
    row.append(cell);
  }
  for (let i = 0; i < arr.length; i++) {
    let row = table.insertRow();
    let j = 0;
    for (let item in arr[i]) {
      let cell = row.insertCell(j);
      cell.innerText = arr[i][item];
      j++;
    }
  }

  document.body.append(table);

  table.rows[0].addEventListener("click", tableSort);

  function tableSort(event) {
    let target = event.target.innerHTML.toLowerCase();
    let tableSort = arr.sort((a, b) =>
      a[target] > b[target] ? 1 : a[target] < b[target] ? -1 : 0
    );
    table.remove();
    genTable(tableSort);
  }
}

genTable(goods);

//Задача №2
