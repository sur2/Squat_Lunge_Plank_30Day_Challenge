const challenge = document.querySelector('.challenge');
const challengeTable = document.createElement('table');

challengeTable.className = 'challenge_table';
challenge.appendChild(challengeTable);



let WORKOUTS = [];

function makeTable() {
    let week = 0;
    for(let d = 1; d < 31; d++) {
        if((d - 1) % 6 == 0) {
            const tableRow = document.createElement('tr');
            challengeTable.appendChild(tableRow);
            tableRow.className = `trWeek${++week}`;
        }
        const tableDate = document.createElement('td');
        document.querySelector(`.trWeek${week}`).appendChild(tableDate);
        tableDate.className = `tdDay${d}`;
        tableDate.innerHTML = `Day${d}`;
        const divWorkOut = document.createElement('div');
        divWorkOut.className = `divWorkOut${d}`;
        tableDate.appendChild(divWorkOut);
    }
}

function loadJSON() {
    
}

function init() {
    makeTable();
}

init();