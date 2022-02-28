const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
const img = document.querySelector('.image');
const Naam = document.querySelector('.Naam');
const discription = document.querySelector('.discription');

const imgArr = ['./finalSrijan.png', './anupamcut.png', './ganeshfinal.png', './HemantFinal.png', './MandaiFinal.png'];
const disArr = ['I m Srijan', 'I m Anupam', 'I m Ganesh', 'I m Hemant', 'I m Maan Bahadur'];
const nameArr = ['Srijan Sigdel', 'Anupam Poudel', 'Ganesh Kunwar', 'Hemant Rajbansi', 'Maan Bahadur Tamang'];

let num = 4;
leftBtn.addEventListener('click', () => {
    num--;
    if (num < 0) {
        num = 4;
    }
    console.log(num);
    change();
});
rightBtn.addEventListener('click', () => {
    num++;
    if (num > 4) {
        num = num % 4;
    }
    console.log(num);
    change();
})

function change() {
    img.src = imgArr[num];
    discription.textContent = disArr[num];
    Naam.textContent = nameArr[num];
}
