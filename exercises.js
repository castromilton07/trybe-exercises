// Exercício 1

const addEmployee = (fullName) => {
    const employee = {
        nomeCompleto: fullName,
        email: `${fullName.toLowerCase().replace(' ', '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}@trybe.com`,
    };
    return employee;
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };
    return employees;
}

//console.log(newEmployees(addEmployee));

/* const employees = {};

const newEmployees2 = (callback) => {
    if (Object.keys(employees).length === 0) employees.id1 = callback;
    else employees[`id${Object.keys(employees).length + 1}`] = callback;
    return employees;
};

newEmployees2(addEmployee('Pedro Guerra'));
newEmployees2(addEmployee('Luiza Drumond'));
console.log(newEmployees2(addEmployee('Carla Paiva'))); */
// console.log(employees);

// Exercício 2

const checkRaffle = (betNumber, drawnNumber) => { if (betNumber === drawnNumber) return true; };

const raffle = (betNumber, callback) => {
    const drawnNumber = Math.floor(Math.random() * 5) + 1;
    if (callback(betNumber, drawnNumber) === true) return 'Parabéns você ganhou';
    else return 'Tente novamente';
};

// console.log(raffle(3, checkRaffle));

// Exercício 3
const checkAnswers = (rightAnswers, studentAnswers) => {
    let result = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        if (studentAnswers[index] === rightAnswers[index]) result += 1;
        else if (studentAnswers[index] === 'N.A');
        else result -= 0.5;
    }
    return result;
};

const answers = (rightAnswers, studentAnswers, callback) => {
    return callback(rightAnswers, studentAnswers);
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// console.log(answers(rightAnswers, studentAnswers, checkAnswers));
