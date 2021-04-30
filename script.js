// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
function modifyParagraph(descriptionString) {
    document.getElementsByTagName('p')[0].innerHTML = descriptionString;
}

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function modifyColorYellowBox(trybeColor) {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = trybeColor;
}

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
function modifyColorRedBox(whiteColor) {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = whiteColor;
}

// 4. Crie uma função que corrija o texto da tag <h1>.
function correctText(correctString) {
    document.getElementsByTagName('h1')[0].innerHTML = correctString;
}

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function modifyUpperCase() {
    // document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';
    let colletionOfTagP;
    colletionOfTagP = document.getElementsByTagName('p');
    for(let index = 0; index < colletionOfTagP.length; index += 1) {
        colletionOfTagP[index].style.textTransform = 'uppercase';
    }
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showAllContentTagsP() {
    let colletionOfTagP;
    colletionOfTagP = document.getElementsByTagName('p');
    for(let index = 0; index < colletionOfTagP.length; index += 1) {
        console.log(colletionOfTagP[index].innerHTML);
    }
}

modifyParagraph('Daqui 2 anos, eu me vejo como o pai amigo e atencioso do José Miguel que estará com 1 ano e meio de vida, e também me vejo em crescimento exponencial na carreira de desenvolvedor Web com um bom emprego e me sentindo estável financeiramente, podendo estar recompensando a Trybe por todo empenho e dedicação na minha formação.');
modifyColorYellowBox('rgb(76, 164, 109)');
modifyColorRedBox('white');
correctText('Exercício 5.1 - JavaScript');
modifyUpperCase();
showAllContentTagsP();