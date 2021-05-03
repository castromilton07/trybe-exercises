let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ex. 01
for (let number of numbers) {
    console.log(number);
}

// Ex. 02
let sumAllNumber = 0;
for (let number of numbers) {
    sumAllNumber += number;
}
console.log(sumAllNumber);

// Ex. 03
let average = 0;
for (let number of numbers) {
    average += number;
}
average = (average/numbers.length)
console.log(average);

// Ex. 04
if (average > 20) {
    console.log('valor maior que 20');
} else console.log('valor menor ou igual a 20');

// Ex. 05
let higherNumber = 0;
for (let number of numbers) {
    if (number > higherNumber) {
        higherNumber = number;
    }
}
console.log(higherNumber);

// Ex. 06
let oddCount = 0;
for (let number of numbers) {
    if (number % 2 !== 0) {
        oddCount += 1;
    }
}
if (oddCount < 1) {
    console.log('nenhum valor ímpar encontrado');
} else console.log(oddCount);

// Ex. 07
let lowerNumber = 0;
for (let number of numbers) {
    if (numbers.indexOf(number) === 0) {
        lowerNumber = number;
    }
    if (number < lowerNumber) {
        lowerNumber = number;
    }
}
console.log(lowerNumber);

// Ex. 08
let arrayEx08 = [];
for (index = 1; index <= 25; index += 1) {
    arrayEx08.push(index);
}
console.log(arrayEx08);

// Ex. 09
for (let valor of arrayEx08) {
    console.log((valor / 2));
}