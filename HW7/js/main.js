let articles = [{
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

let goods = [{
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
    table.style.margin = "30px auto";
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
function genPrize(n) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.style.width = 220 * n + "px";
    container.style.height = 120 * n + "px";

    let shot = document.createElement("div");
    shot.style.textAlign = "center";
    let counter = n;
    shot.textContent = `Попыток осталось: ${counter}`;

    let counterPresent = 0;

    let arr = [];
    for (let i = 0; i < Math.floor((n * n) / 7); i++) {
        arr[i] = Math.floor(Math.random() * (n * n));
    }

    for (i = 1; i <= n * n; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        if (arr.includes(i)) {
            box.classList.add("prise");
        } else {
            box.classList.add("empty");
        }
        box.addEventListener("click", boxOpen);

        function boxOpen() {
            if (counter > 0) {
                if (this.classList.contains("prise")) {
                    box.classList.add("win");
                    box.innerText = "Приз!";
                    counterPresent++;
                } else {
                    box.classList.add("lose");
                    box.innerText = "Пусто!";
                }
                counter--;
                shot.textContent = `Осталось попыток: ${counter}`;
            }
            if (counter === 0) {
                shot.textContent = `Ваши попытки закончились.`;
            }
        }
        container.append(box);
    }

    document.body.append(container);
    document.body.append(shot);
}

genPrize(5);

//Задача №3
let checkForm = document.forms.checkForm;
checkForm.checkbox.addEventListener("click", inputAccess);

function inputAccess() {
    checkForm.text.disabled = !checkForm.checkbox.checked;
}


//Задача №4
let form = document.forms.verification;
let password = form.elements.password;
let login = form.elements.login;
login.addEventListener("focus", focusOnElem);
password.addEventListener("focus", focusOnElem);

function focusOnElem() {
    this.nextElementSibling.classList.add("error");
}

login.addEventListener("blur", focusOutLogin);
password.addEventListener("blur", focusOutPassword);

function focusOutLogin() {
    if (this.value.length < 3 || this.value.length > 10) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}

function focusOutPassword() {
    if (this.value.length < 6) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}
form.addEventListener("submit", takeForm);

function takeForm(event) {
    event.preventDefault();
    console.log("отправка формы");
    console.log(this.elements.login.value);
    let formData = new FormData(this);
    console.log(formData);
    console.log(formData.getAll("login"));
    console.log(formData.getAll("password"));
}
let clean = document.getElementsByClassName("info-block");
form.addEventListener("reset", outForm);

function outForm(event) {
    event.preventDefault();
    login.value = null;
    password.value = null;
    this.nextElementSibling.classList.add("error");
    this.nextElementSibling.classList.remove("success");
    for (elem of clean) {
        elem.classList.add("error");
        elem.classList.remove("success");
    }
}
//Задача №4