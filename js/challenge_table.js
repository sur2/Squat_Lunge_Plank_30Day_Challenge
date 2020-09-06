const challenge = document.querySelector('.challenge');
const challengeTable = document.createElement('table');

challengeTable.className = 'challenge_table';
challenge.appendChild(challengeTable);

let workoutSize;
workoutSize = workouts.length;

function makeOneDay(nDay, dayDiv) {
    const oneDayDiv = document.createElement('div');
    
    const checkboxSquat = document.createElement('input');
    checkboxSquat.type = 'checkbox';
    const labelSquat = document.createElement('label');
    labelSquat.innerHTML = workouts[nDay].squat + "<br/>";
    
    const checkboxLunge = document.createElement('input');
    checkboxLunge.type = 'checkbox';
    const labelLunge = document.createElement('label');
    labelLunge.innerHTML = workouts[nDay].lunge + "<br/>";
    
    const checkboxPlank = document.createElement('input');
    checkboxPlank.type = 'checkbox';
    const labelPlank = document.createElement('label');
    labelPlank.innerHTML = workouts[nDay].plank + "<br/>";

    oneDayDiv.appendChild(checkboxSquat);
    oneDayDiv.appendChild(labelSquat);
    oneDayDiv.appendChild(checkboxLunge);
    oneDayDiv.appendChild(labelLunge);
    oneDayDiv.appendChild(checkboxPlank);
    oneDayDiv.appendChild(labelPlank);
    
    dayDiv.appendChild(oneDayDiv);
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

        makeOneDay(d - 1, tableDate);
    }
}

function init() {
    makeTable();
}

init();