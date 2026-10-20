//1) Используя регулярные выражения сделать проверку на валидность gmail почты внутри проекта. Вёрстка уже есть в проекте, надо только добавить фукнционал
// 2) Используя рекурсию необходимо заставить маленький блок двигаться по родительскому блоку вправо. И изменяйте параметр позиции малого блока (.style.left=${переменная}px).
// Нужно чтобы маленький блок подвинулся слева на право внутри большого блока и остановился. Вёрстка уже есть в самом проекте.
// 3) Отправить мне проект в который вы добавили ваше ДЗ через github (оживляем наш проект)


//1
const gmailInput = document.querySelector("#gmail_input");
const gmailInputButton = document.querySelector("#gmail_button.btn");
const gmailResults = document.querySelector("#gmail_result");
//       example@gmail.com
const regex = /^[a-z0-9.]{6,30}@gmail\.com$/i;

gmailInputButton.addEventListener("click", () => {
    if (regex.test(gmailInput.value)) {        gmailResults.textContent = "Gmail введен коректно!";
        gmailResults.style.color = "lightgreen";
    }else{
        gmailResults.textContent = "Gmail введен не коректно!";
        gmailResults.style.color = "red";
    }
})






//2 ------------------


//1) Доработать прошлое ДЗ! Нужно чтобы малый квадрат теперь двигался по всему
// родительскому квадрату. Дорабатываете код внутри проекта.
//
// 2) Секундомер
// Если нажать на start то цифра начнет увеличиваться на единицу до того момента пока вы не нажмете на кнопку stop
// Используйте методы которые мы прошли на уроке. При нажатии на start повторно она должна продолжить тот
// счет на котором остановился. Добавить на кнопку reset обнуление счетчика и паузу. Обработать все возможные баги
// при работе счетчика (вёрстка в проекте уже есть) Код писать внутри проекта (home_works.js)
//
// 3) Сделать слайдер автоматическим, чтобы срабатывала каждые 5 секунд или на ваше усмотрение





//1
const move = document.querySelector('.child_block');
let posX = 0;
let posY = 0;
let direction = 'right';

const moveFunc = () => {
    setInterval(() => {
        if (direction === 'right') {
            posX++
            if(posX >= 448) direction = 'down';
        }else if(direction === 'down') {
            posY++
            if(posY >= 448) direction = 'left';
        }else if(direction === 'left') {
            posX--
            if(posX <= 0) direction = 'up';
        }else if(direction === 'up') {
            posY--
            if(posY <= 0) direction = 'right';
        }
        move.style.left = `${posX}px`;
        move.style.top = `${posY}px`;
    },5)
}
moveFunc();




//2
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const seconds = document.querySelector('#seconds');
let startTimer = null;

let time = 0;
start.onclick = () => {
    if (startTimer) return;
     startTimer = setInterval(() => {
        time++
        seconds.textContent = time;
    },1000)
}

stop.onclick = () => {

    clearInterval(startTimer);
    startTimer = null;
}
reset.onclick = () => {
    time = 0;
    seconds.textContent = time;

    clearInterval(startTimer);
    startTimer = null;
}


//3  в lesson.js




//Повторить всё что на уроке прошли.
//
// function delay(value, ms, shouldFail = false) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// shouldFail ? reject(new Error(Ошибка при обработке: ${value})) : resolve(value);
// }, ms);
// });
// }
//
// 1) Собрать цепочку из трёх последовательных delay (каждый следующий увеличивает значение на 1,
// задержка 500мс). Второй delay должен падать (shouldFail = true). Через .then/.catch/.finally проверь:
// .catch перехватывает ошибку, шаги после падения не выполняются, а .finally срабатывает в любом случае.
//
// 2) Перепиши задачу 1 через async/await. Дальше усложни: обработай массив из 4 значений последовательно
// (for + await внутри), где случайно (Math.random() > 0.7) delay может упасть — но так, чтобы одна ошибка
// не прерывала обработку остальных элементов (try/catch внутри цикла), и в результате получить массив вида
// [{value, error}] для каждого элемента.
//
// 3) Запусти параллельно 4 delay с разными таймаутами, один из них падает.
// Через Promise.all в try/catch — проверь, что происходит при первой же ошибке.
// Через Promise.allSettled — раздели результат на succeeded и failed.
// Через Promise.race — устрой гонку между "полезным" delay(2000) и "таймаутом" delay(500, true), обработай в try/catch.
// добавить всё это в homework.js


const delay = (point,ms = 500,shouldFail) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(shouldFail) reject(new Error("delay ошибка на " + point));
            else resolve(point + 1);
        },ms)
    })
}
delay(0)
    .then((point) => {
        console.log("delay 1: "+ point);
        return delay(point,500,true);
    })
.then((point) => {
    console.log("delay 2: "+ point);
    return delay(point,500,false);
})
.then((point) => {
    console.log("delay 3: "+ point);
    return delay(point,500,false);
})
.catch((err) => {
    console.warn("catch нашел ошибку : "+ err.message);
})
.finally(() => {
    console.log("Это finally")
})


//2

const mass = [123, 12, 52, 90]



const processAll = async (values) => {
    const results = []

    for (const value of values) {
        try {
            const result = await delay(value, 500, Math.random() > 0.7)
            results.push({ value: result, error: null })
        } catch (err) {
            results.push({ value: null, error: err.message })
        }
    }

    return results
}



processAll(mass)
.then((results) => {
    console.log(results);
})
3

const makeTasks = () => [
    delay(1, 500),
    delay(2, 1500, true), // этот падает
    delay(3, 0),
    delay(4, 1000),
];

const runAll = async () => {
    try {
        const results = await Promise.all(makeTasks());
        console.log("all успех:", results);
    } catch (err) {
        console.warn("all ошибка:", err.message);
    }
};


const runAllSettled = async () => {
    const results = await Promise.allSettled(makeTasks());

    const succeeded = results
        .filter((r) => r.status === "fulfilled")
        .map((r) => r.value);

    const failed = results
        .filter((r) => r.status === "rejected")
        .map((r) => r.reason.message);

    console.log("allSettled succeeded:", succeeded);
    console.log("allSettled failed:", failed);
};

// 3.3 Promise.race: «полезный» delay(2000) против «таймаута» delay(500, true)
const runRace = async () => {
    try {
        const result = await Promise.race([
            delay(1, 2000),       // полезная работа
            delay(2, 500, true),  // таймаут
        ]);
        console.log("race успех:", result);
    } catch (err) {
        console.warn("race ошибка:", err.message);
    }
};

runAll();
runAllSettled();
runRace();