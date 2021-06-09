const promise = new Promise((resolved, rejected) => {
  const randomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    randomNumbers[index] = Math.pow(randomNumbers[index], 2);
  }
  const sum = randomNumbers.reduce((currentValue, previousValue) => currentValue += previousValue);
  (sum < 8000) ? resolved(sum) : rejected('É mais de oito mil! Essa promise deve estar quebrada!');
})
.then((sum) => {
  const result = [];
  // [sum / 2, sum / 3, sum / 5, sum / 10].forEach((value) => result.push(Math.round(value)));
  [sum / 2, sum / 3, sum / 5, sum / 10].forEach((value) => result.push(parseFloat(value.toFixed(2))));
  console.log(result, sum);
})
.catch((error) => console.log(error));