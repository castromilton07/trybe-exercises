const colorBg = [];
function getElementsColorBg() {
    for (let index = 1; index <= 12 ; index += 1) {
        let id = 'color-bg-' + index;
        colorBg[index] = document.getElementById(id);
    }
}
getElementsColorBg();

const colorFont = [];
function getElementsColorFont() {
    for (let index = 1; index <= 12 ; index += 1) {
        let id = 'color-font-' + index;
        colorFont[index] = document.getElementById(id);
    }
}
getElementsColorFont();

function changeBgColor(event) {
    let box = document.querySelector('#text-box');
    box.style.backgroundColor = event.target.style.backgroundColor;
       
}
function createEventsBgColor() {
    for (let index = 1; index <= 12; index += 1) {
        colorBg[index].addEventListener('click', changeBgColor);
    }
}
createEventsBgColor();

function changeFontColor(event) {
    let text = document.querySelectorAll('.text-content');
    text[0].style.color = event.target.style.backgroundColor;
    text[1].style.color = event.target.style.backgroundColor;

    
}
function createEventsFontColor() {
    for (let index = 1; index <= 12; index += 1) {
        colorFont[index].addEventListener('click', changeFontColor);
    }
}
createEventsFontColor();

const fontOption = document.querySelector('#font-family-select');
function changeFontFamily(event) {
    let text = document.querySelectorAll('.text-content');
    text[0].style.fontFamily = event.target.children[event.target.selectedIndex].value;
    text[1].style.fontFamily = event.target.children[event.target.selectedIndex].value;
}
function createEventsFontFamily() {
    for (let index = 0; index < 8; index += 1) {
        fontOption.addEventListener('change', changeFontFamily);
    }
}
createEventsFontFamily();

const buttonApply = document.querySelector('#apply-button');
function fontProprietyApply() {
    let text = document.querySelectorAll('.text-content');
    let size = document.querySelector('#font-size-input');
    let spacing = document.querySelector('#line-height-input');
    text[1].style.fontSize = size.value + 'px';
    let ajust = parseInt(size.value)*1.25;
    text[0].style.fontSize = ajust + 'px';
    text[1].style.lineHeight = spacing.value + 'px';
}
buttonApply.addEventListener('click', fontProprietyApply);