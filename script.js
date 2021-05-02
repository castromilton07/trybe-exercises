/*
Exercícios Parte 01:
    1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
    2. Adicione a tag div com a classe main-content como filho da tag body ;
    3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
    4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
    5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
    6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
    7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
        Esse elemento deve ser filho do div criado no passo 5;
    8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
    9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

Exercícios Parte 02:
    1. Adicione a classe title na tag h1 criada;
    2. Adicione a classe description nas 3 tags h3 criadas;
    3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
    4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar,
        basta configurar o margin-right: auto do div ;
    5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
    6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
*/

// Parte 01

// Ex. 01
let ex01 = document.createElement('h1');
ex01.innerHTML = 'Exercício 5.2 - JavaScript DOM';
console.log(document.querySelector('body').appendChild(ex01));

// Ex. 02
let ex02 = document.createElement('div');
ex02.className = 'main-content';
console.log(document.querySelector('body').appendChild(ex02));

// Ex. 03
let ex03 = document.createElement('div');
ex03.className = 'center-content';
console.log(document.querySelector('.main-content').appendChild(ex03));

// Ex. 04
let ex04 = document.createElement('p');
ex04.innerHTML = 'Algum Texto ...';
console.log(document.querySelector('.center-content').appendChild(ex04));

// Ex. 05
let ex05 = document.createElement('div');
ex05.className = 'left-content';
console.log(document.querySelector('.main-content').appendChild(ex05));

// Ex. 06
let ex06 = document.createElement('div');
ex06.className = 'right-content';
console.log(document.querySelector('.main-content').appendChild(ex06));

// Ex. 07
let ex07 = document.createElement('img');
ex07.className = 'small-image';
ex07.src = 'https://picsum.photos/200';
console.log(document.querySelector('.left-content').appendChild(ex07));

// Ex. 08
let ex08 = document.createElement('ul');
console.log(document.querySelector('.right-content').appendChild(ex08));
let um = document.createElement('li');
um.innerHTML = 'Um';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(um));
let dois = document.createElement('li');
dois.innerHTML = 'Dois';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(dois));
let tres = document.createElement('li');
tres.innerHTML = 'Tres';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(tres));
let quatro = document.createElement('li');
quatro.innerHTML = 'Quatro';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(quatro));
let cinco = document.createElement('li');
cinco.innerHTML = 'Cinco';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(cinco));
let seis = document.createElement('li');
seis.innerHTML = 'Seis';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(seis));
let sete = document.createElement('li');
sete.innerHTML = 'Sete';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(sete));
let oito = document.createElement('li');
oito.innerHTML = 'Oito';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(oito));
let nove = document.createElement('li');
nove.innerHTML = 'Nove';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(nove));
let dez = document.createElement('li');
dez.innerHTML = 'Dez';
console.log(document.querySelector('.right-content').firstElementChild.appendChild(dez));

// Ex. 09
let ex09TagH3A = document.createElement('h3');
ex09TagH3A.innerHTML = 'Tag H3 (1)';
console.log(document.querySelector('.main-content').appendChild(ex09TagH3A));
let ex09TagH3B = document.createElement('h3');
ex09TagH3B.innerHTML = 'Tag H3 (2)';
console.log(document.querySelector('.main-content').appendChild(ex09TagH3B));
let ex09TagH3C = document.createElement('h3');
ex09TagH3C.innerHTML = 'Tag H3 (3)';
console.log(document.querySelector('.main-content').appendChild(ex09TagH3C));