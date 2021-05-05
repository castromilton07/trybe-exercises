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
    switch (event.target.id) {
        case 'color-bg-1':
            box.style.backgroundColor = 'rgb(241, 36, 62)';
            break;
        case 'color-bg-2':
            box.style.backgroundColor = 'rgb(26, 144, 217)';
            break;
        case 'color-bg-3':
            box.style.backgroundColor = 'rgb(242, 206, 22)';
            break;
        case 'color-bg-4':
            box.style.backgroundColor = 'rgb(118, 61, 242)';
            break;
        case 'color-bg-5':
            box.style.backgroundColor = 'rgb(3, 140, 51)';
            break;
        case 'color-bg-6':
            box.style.backgroundColor = 'rgb(242, 104, 53)';
            break;
        case 'color-bg-7':
            box.style.backgroundColor = 'rgb(123, 132, 140)';
            break;
        case 'color-bg-8':
            box.style.backgroundColor = 'rgb(139, 26, 15)';
            break;
        case 'color-bg-9':
            box.style.backgroundColor = 'rgb(6, 157, 191)';
            break;
        case 'color-bg-10':
            box.style.backgroundColor = 'rgb(199, 217, 61)';
            break;
        case 'color-bg-11':
            box.style.backgroundColor = 'rgb(255, 255, 255)';
            break;
        case 'color-bg-12':
            box.style.backgroundColor = 'rgb(0, 0, 0)';
            break;
    }
}
colorBg[1].addEventListener('click', changeBgColor);
colorBg[2].addEventListener('click', changeBgColor);
colorBg[3].addEventListener('click', changeBgColor);
colorBg[4].addEventListener('click', changeBgColor);
colorBg[5].addEventListener('click', changeBgColor);
colorBg[6].addEventListener('click', changeBgColor);
colorBg[7].addEventListener('click', changeBgColor);
colorBg[8].addEventListener('click', changeBgColor);
colorBg[9].addEventListener('click', changeBgColor);
colorBg[10].addEventListener('click', changeBgColor);
colorBg[11].addEventListener('click', changeBgColor);
colorBg[12].addEventListener('click', changeBgColor);

function changeFontColor(event) {
    let text = document.querySelectorAll('.text-content');
    switch (event.target.id) {
        case 'color-font-1':
            text[0].style.color = 'rgb(241, 36, 62)';
            text[1].style.color = 'rgb(241, 36, 62)';
            break;
        case 'color-font-2':
            text[0].style.color = 'rgb(26, 144, 217)';
            text[1].style.color = 'rgb(26, 144, 217)';
            break;
        case 'color-font-3':
            text[0].style.color = 'rgb(242, 206, 22)';
            text[1].style.color = 'rgb(242, 206, 22)';
            break;
        case 'color-font-4':
            text[0].style.color = 'rgb(118, 61, 242)';
            text[1].style.color = 'rgb(118, 61, 242)';
            break;
        case 'color-font-5':
            text[0].style.color = 'rgb(3, 140, 51)';
            text[1].style.color = 'rgb(3, 140, 51)';
            break;
        case 'color-font-6':
            text[0].style.color = 'rgb(242, 104, 53)';
            text[1].style.color = 'rgb(242, 104, 53)';
            break;
        case 'color-font-7':
            text[0].style.color = 'rgb(123, 132, 140)';
            text[1].style.color = 'rgb(123, 132, 140)';
            break;
        case 'color-font-8':
            text[0].style.color = 'rgb(139, 26, 15)';
            text[1].style.color = 'rgb(139, 26, 15)';
            break;
        case 'color-font-9':
            text[0].style.color = 'rgb(6, 157, 191)';
            text[1].style.color = 'rgb(6, 157, 191)';
            break;
        case 'color-font-10':
            text[0].style.color = 'rgb(199, 217, 61)';
            text[1].style.color = 'rgb(199, 217, 61)';
            break;
        case 'color-font-11':
            text[0].style.color = 'rgb(255, 255, 255)';
            text[1].style.color = 'rgb(255, 255, 255)';
            break;
        case 'color-font-12':
            text[0].style.color = 'rgb(0, 0, 0)';
            text[1].style.color = 'rgb(0, 0, 0)';
            break;
    }
    
}
colorFont[1].addEventListener('click', changeFontColor);
colorFont[2].addEventListener('click', changeFontColor);
colorFont[3].addEventListener('click', changeFontColor);
colorFont[4].addEventListener('click', changeFontColor);
colorFont[5].addEventListener('click', changeFontColor);
colorFont[6].addEventListener('click', changeFontColor);
colorFont[7].addEventListener('click', changeFontColor);
colorFont[8].addEventListener('click', changeFontColor);
colorFont[9].addEventListener('click', changeFontColor);
colorFont[10].addEventListener('click', changeFontColor);
colorFont[11].addEventListener('click', changeFontColor);
colorFont[12].addEventListener('click', changeFontColor);