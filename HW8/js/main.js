let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 900, 600);

let width = 128;
let height = 128;

let tiger = {
    img: "tiger.png",
    x: 22,
    y: 15,
    width,
    height
};

function drawImg(obj) {
    let img = new Image();
    img.src = "img/" + obj.img;
    img.onload = () => {
        ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
    };
}

function makeRabbit() {
    return {
        img: "rabbit.png",
        width,
        height,
        x: Math.floor(Math.random() * (canvas.width - width)),
        y: Math.floor(Math.random() * (canvas.height - height))
    };
}

function makeEnemies(count) {
    let enem = [];
    for (let i = 0; i < count; i++) {
        enem.push(makeRabbit());
    }
    return enem;
}

let enemies = makeEnemies(2);

function move(obj, event) {
    console.log(event.code);
    if (event.code === "KeyD") {
        console.log("перемещение вправо");
        clearImg(obj);
        obj.x += 2;
        drawImg(obj);
    } else if (event.code === "KeyA") {
        console.log("перемещение влево");
        clearImg(obj);
        obj.x -= 2;
        drawImg(obj);
    } else if (event.code === "KeyW") {
        console.log("перемещение вверх");
        clearImg(obj);
        obj.y -= 2;
        drawImg(obj);
    } else if (event.code === "KeyS") {
        console.log("перемещение вниз");
        clearImg(obj);
        obj.y += 2;
        drawImg(obj);
    }
    attackEnemies(tiger, enemies);
}

function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function drawEnemies(arr) {
    for (let i = 0; i < arr.length; i++) {
        drawImg(arr[i]);
    }
}

function attackEnemies(unit, enem) {
    for (let i = 0; i < enem.length; i++) {
        if (
            unit.x + unit.width >= enem[i].x &&
            unit.y + unit.height >= enem[i].y
        ) {
            clearImg(enem[i]);
        }
    }
}

drawImg(tiger);
drawEnemies(enemies);
console.log(enemies);

document.addEventListener("keydown", move.bind(document, tiger));
