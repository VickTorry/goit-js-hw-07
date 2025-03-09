'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const coloTextValue = document.querySelector('.color');
changeColorBtn.addEventListener('click', handleClick);


function handleClick(event) {
  const currentColorValue = getRandomHexColor();
  background.style.backgroundColor = currentColorValue;
  coloTextValue.textContent = currentColorValue;
}