// const bodyDOM = document.querySelector('.klasespavadinimas');
// const bodyDOM = document.querySelector('#idpavadinimas');
const bodyDOM = document.querySelector('body');
const spanDOM = document.querySelector('.hex');
const buttonDOM = document.querySelector('button');

function generateColor () {

}

buttonDOM.addEventListener("click", () => {
const randomColor = Math.random().toString(16).slice(2,8)
// console.log(randomColor);
spanDOM.innerHTML = '#' + randomColor;

bodyDOM.style.backgroundColor = "#" + randomColor;
})

bodyDOM.addEventListener("mousewheel", () => {
    const randomColor = Math.random().toString(16).slice(2,8)
    // console.log(randomColor);
    spanDOM.innerHTML = '#' + randomColor;
    
    bodyDOM.style.backgroundColor = "#" + randomColor;
    })