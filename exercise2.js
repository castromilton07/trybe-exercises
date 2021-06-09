const promise = new Promise((resolved, rejected) => {
  const randomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    randomNumbers[index] = Math.pow(randomNumbers[index], 2);
  }
  const sum = randomNumbers.reduce((currentValue, nextValue) => currentValue += nextValue);
  if (sum < 8000) return resolved('Promise resolvida');
  rejected('Promise rejeitada');
})
.then((msg) => console.log(msg))
.catch((error) => console.log(error));