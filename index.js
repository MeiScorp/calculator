let userInput = document.getElementById('user-input');

function typingValue(input) {
    userInput.textContent += input;
    console.log(typeof userInput)
    console.log(userInput.textContent.lastIndexOf(input));//выводит индекс числа
}

function clearAll() {
    userInput.textContent = '';
}

function clearLast() {
    userInput.textContent = userInput.textContent.slice(0, -1);
}

function calcValue() {
    try {
        userInput.textContent = eval(userInput.textContent);// считает результат из вводимых данных
    }
    catch (error) {
        userInput.textContent = 'Error'; //в случае невыполнения условия выше выдает ошибку
    }
}

let count = document.getElementById('count-label');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
let start = 0;


function increaseNum() {
    start++;
    count.textContent = start;
}

function decreaseNum() {
    start--;
    count.textContent = start;
}

function resetNum() {
    count.textContent = 0;
}


//tictac



function rollDice() {
    let numOfDice = document.getElementById('numOfDice').value;
    let diceResult = document.getElementById('dice-result');
    const diceImg = document.getElementById('dice-img');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        images.push(`<img src="img/${value}.png">`);
        console.log(images.innerHTML);
    }

    diceResult.textContent = `dice result: ${values.join(', ')}`;
    diceImg.innerHTML = images.join('');
    
}
/*
const slides = document.querySelectorAll(".slider-conteiner img");

const nextSlider = document.getElementById("nextSlider");
const prevSlider = document.getElementById("prevSlider");

let slideIndex = 0;



window.onload = function slideInitialization() {
    slides[slideIndex].classList.add("display-slide");
}


nextSlider.onclick = function() {
    if(slideIndex < (slides.length - 1)) {
        slides[slideIndex].classList.remove("display-slide");
        slideIndex++;
        slides[slideIndex].classList.add("display-slide");
    }
    else {
        slides[slideIndex].classList.remove("display-slide");
        slideIndex -= 2;
        slides[slideIndex].classList.add("display-slide");
    }
}

prevSlider.onclick = function() {
    if(slideIndex < slides.length && slideIndex !== 0) {
        slides[slideIndex].classList.remove("display-slide");
        slideIndex--;
        slides[slideIndex].classList.add("display-slide");
    }
    else {
        slides[slideIndex].classList.remove("display-slide");
        slideIndex += 2;
        slides[slideIndex].classList.add("display-slide");
    }
  
}*/

const slides = document.querySelectorAll(".slider-conteiner img");
const next = document.getElementById("nextSlider");
const prev = document.getElementById("prevSlider");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("display-slide");

    }
}

function showSlide() {
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    } else if(slideIndex < 0) {
        slideIndex = 2;
    }
    slides.forEach(slide => {
        slide.classList.remove("display-slide");
    })
    slides[slideIndex].classList.add("display-slide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);

}


const words = ["Girl", "Programmer", "Apple"];
let span = document.getElementById("span");

let interval = 0;

function typer() {
    let wordIndex = 0;
    function processWord() {
        if (wordIndex < words.length) {
            let currentWord = words[wordIndex];
            typeChar(currentWord, () => {
                interval = 0;
                wordIndex++;
                processWord();
            });
        }
    }
    processWord();
}

function typeChar(currentWord, callback) {
    // Печатаем каждую букву с задержкой 1 секунда
    for (let i = 0; i < currentWord.length; i++) {
        setTimeout(() => {
            span.textContent += currentWord.charAt(i);
        }, 1000 * (i + 1)); // Задержка 1 секунда
    }

    // После того, как все буквы напечатаны, начинаем стирать
    setTimeout(() => {
        interval = 0;  // Сбрасываем интервал для стирания
        let intervalId = setInterval(() => {
            if (interval < currentWord.length) {
                span.textContent = span.textContent.slice(0, -1); // Удаляем последнюю букву
                interval++;
            } else {
                clearInterval(intervalId); // Останавливаем интервал, когда все буквы удалены
                callback();  // Переходим к следующему слову
            }
        }, 2000); // Задержка в 2 секунды между удалением букв
    }, currentWord.length * 1000); // Начинаем стирать после того, как напечатаем все буквы
}

typer();  // Запускаем функцию
