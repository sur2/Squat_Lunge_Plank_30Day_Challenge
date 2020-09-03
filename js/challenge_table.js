const challenge = document.querySelector('.challenge');
const challengeTable = document.createElement('table');

challengeTable.className = 'challenge_table';
challenge.appendChild(challengeTable);

let workoutSize;
workoutSize = workouts.length;

function makeOneDay(nDay) {
    const oneDayDiv = document.createElement('div');
    oneDayDiv.innerHTML = 
    "<p>" + workouts[nDay].squat + "</p>" + 
    "<p>" + workouts[nDay].lunge + "</p>" + 
    "<p>" + workouts[nDay].plank + "</p>";
    
    challengeTable.appendChild(oneDayDiv);
}

function makeTable() {
    let week = 0;
    for (let d = 1; d < workoutSize + 1; d++) {
        if ((d - 1) % 6 == 0) {
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

function init() {
    makeOneDay(1 - 1);
}

init();