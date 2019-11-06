let goods = {
  piano: {
    title: "Пианино",
    price: 3000,
    count: 25
  },
  guitar: {
    title: "Гитара",
    price: 1200,
    count: 40
  },
  drum: {
    title: "Барабаны",
    price: 2700,
    count: 12
  },
  flute: {
    title: "Флейта",
    price: 900,
    count: 50
  },
  harp: {
    title: "Арфа",
    price: 3400,
    count: 5
  }
};

let books = [
  { author: "Толстой", title: "Война и мир" },
  { author: "Гончаров", title: "Обломов" },
  { author: "Лермонтов", title: "Герой Нашего Времени" }
];

//Задача №1
function getGoods(object, from, to) {
  let result = [];
  for (let item in object) {
    if (object[item].price >= from && object[item].price <= to) {
      result.push(object[item].title);
    }
  }
  return result;
}
console.log(getGoods(goods, 2000, 3000));

//Задача №2
function addToCart(object, title, countCart) {
  for (let item in object) {
    if (object[item].title == title) {
      if (object[item].count >= countCart) {
        object[item].count -= countCart;
        return `${countCart} шт. ${object[item]["title"]} добавлено в корзину `;
      } else {
        return "Товара нет на складе";
      }
    }
  }
}
console.log(addToCart(goods, "Флейта", 5));

//Задача №3
function objectSort(arr) {
  let sortedArr = arr.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  return sortedArr;
}
console.log(objectSort(books));