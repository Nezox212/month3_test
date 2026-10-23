const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

// const hideBlocks = () => {
//   tabBlocks.forEach((item) => {
//     item.classList.remove('active');
//   });
//   tabs.forEach((item) => {
//     item.classList.remove('active')
//   })
// }

// const showBlock = (index = 0) => {
//   tabBlocks[index].classList.add('active');
//   tabs[index].classList.add('active');
// }


// tabsParent.onclick = (event) => {
//   if(event.target.tagName.toLowerCase() == 'button'){
//     const index = [...tabs].indexOf(event.target);
//     hideBlocks();
//     showBlock(index);const modal = document.querySelector('.modal');
// const modalFunc = () => {
//     setInterval(() => {
//         modal.classList.toggle("active");
//     },1000)
// }
// modalFunc();
//   }
// }

// const array = ['yellow', 'red', 'violet'];

const showBlock = (index = 0) => {
    tabBlocks.forEach((block, i) => block.classList.toggle('active', i == index));
    tabs.forEach((tab, i) => tab.classList.toggle('active', i == index));

}
showBlock();
tabsParent.onclick = (event) => {

    const selectedElement = event.target.closest('.tab_content_item');
    if(!selectedElement) return;

    const index = [...tabs].indexOf(selectedElement);
    showBlock(index);
}



const startAutoSwitch = () => {
    return setInterval(() => {
        const activeIndex = [...tabs].findIndex(tab => tab.classList.contains('active'));
        showBlock((activeIndex + 1) % tabs.length);
    }, 5000);
};

let autoSwitch = startAutoSwitch();



const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const converter = (one,two,three) => {
    one.oninput = async() => {
        const responce = await fetch("../data/converter.json", {})
        const {usd,eur} = await responce.json();

        if(one.id == "som"){
            two.value = (one.value / usd).toFixed(2);
            three.value = (one.value / eur ).toFixed(2);
        }
        else if(one.id == "usd"){
            two.value = (one.value * usd).toFixed(2);
            three.value = (one.value * usd / eur).toFixed(2);
        }
        else if(one.id == "eur"){
            two.value = (one.value * eur).toFixed(2);
            three.value = (one.value * eur / usd).toFixed(2);
        }
    }
}
converter(som,usd,eur)
converter(usd,som,eur)
converter(eur,som,usd)



//4

const card = document.querySelector(".card");
const next  = document.querySelector("#btn-next");
const prev = document.querySelector("#btn-prev");

let count = 0;

const TODO_API = (id) => `https://jsonplaceholder.typicode.com/todos/${id}`
const fetchTodoNext = async() => {
    if(count >= 200){
        count = 0;
    }
    count++;
    const response = await fetch(TODO_API(count));
    const {id, title, completed} = await response.json();
    const color = completed ? 'green' : 'red';
    card.style.borderColor = color;
    card.innerHTML = `
    <p>ID - ${id}</p>
    <p>${title}</p>
    <p style="color: ${color}">${completed ? 'Completed' : 'Must to do!'}</p>
  `
}

fetchTodoNext();

const fetchTodoPrev = async() => {
    if(count <= 1){
        count = 201;
    }
    count--;
    const response = await fetch(TODO_API(count));
    const {id, title, completed} = await response.json();
    const color = completed ? 'green' : 'red';

    card.style.borderColor = color;
    card.innerHTML = `
    <p>ID - ${id}</p>
    <p>${title}</p>
    <p style="color: ${color}">${completed ? 'Completed' : 'Must to do!'}</p>
  `
}
next.onclick = fetchTodoNext;
prev.onclick = fetchTodoPrev;