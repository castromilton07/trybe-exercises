function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();

// Ex. 01
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const monthDay = dezDaysList[index];
        const monthDayListItem = document.createElement('li');
        if ((dezDaysList[index] === 24) || (dezDaysList[index] === 31)) {
            monthDayListItem.innerHTML = monthDay;
            monthDayListItem.className = 'day holiday';
        } else if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] === 18)) {
            monthDayListItem.innerHTML = monthDay;
            monthDayListItem.className = 'day friday';
        } else if (dezDaysList[index] === 25) {
            monthDayListItem.innerHTML = monthDay;
            monthDayListItem.className = 'day holiday friday';
        } else {
            monthDayListItem.innerHTML = monthDay;
            monthDayListItem.className = 'day';
        }
        monthDaysList.appendChild(monthDayListItem);
    }
}
createDaysOfTheMonth();

// Ex. 02
function createHolidaysButton(title) {
    const divButtonsContainer = document.querySelector('.buttons-container');
    const holidaysButton = document.createElement('button'); 
    holidaysButton.id = 'btn-holiday';
    holidaysButton.innerHTML = title;
    divButtonsContainer.appendChild(holidaysButton);
}
createHolidaysButton('Feriados');

// Ex. 03
const holidaysBtn = document.querySelector('#btn-holiday');
function changeHolidaysColor() {
    let holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        let colorState = holidays[index].style.backgroundColor;
        if (colorState === 'rgb(238, 238, 238)') {
            holidays[index].style.backgroundColor = 'rgb(248, 248, 248)';
        }
        if (colorState === 'rgb(248, 248, 248)') {
            holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
        } else holidays[index].style.backgroundColor = 'rgb(248, 248, 248)';
    }
    
}
holidaysBtn.addEventListener('click', changeHolidaysColor);