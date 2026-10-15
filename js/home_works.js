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






//2
const moveBlockElements = document.querySelector('.child_block');
let pos = 0;
const test = () => {
    pos++
    if(pos <= 449){
        moveBlockElements.style.left = `${pos}px`;
        requestAnimationFrame(test)
}

}
test()