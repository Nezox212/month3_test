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
