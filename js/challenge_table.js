const challenge = document.querySelector('.challenge');
const challengeTable = document.createElement('table');

challengeTable.className = 'challenge_table';
challenge.appendChild(challengeTable);

const WORKOUT = {
    days : 0,
    squat : 0,
    lunge : 0,
    plank : 0,
};

let WORKOUTS = [];

function makeTable() {
    const tableRow = document.createElement('tr');
    const tableDate = document.createElement('td');

    tableDate.innerHTML = 'Hi';
    tableRow.appendChild(tableDate);
    challengeTable.appendChild(tableRow);
}

function init() {
    makeTable();
}

init();