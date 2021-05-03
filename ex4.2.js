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