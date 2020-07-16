const challenge = document.querySelector('.challenge');
const challengeTable = document.createElement('table');

challengeTable.className = 'challenge_table';
challenge.appendChild(challengeTable);



let WORKOUTS = [];

function makeTable() {
    let week = 0;
    for (let d = 1; d < 31; d++) {
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

function setWorkOut() {
    WORKOUTS.push({
        "day": 1,
        "squat": "SQUAT 50",
        "lunge": "LUNGE 5",
        "plank": "PLANK 20s",
        "conductSquat": false,
        "conductLunge": false,
        "conductPlank": false
    },
        {
            "day": 2,
            "squat": "SQUAT 55",
            "lunge": "LUNGE 10",
            "plank": "PLANK 25s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 3,
            "squat": "SQUAT 60",
            "lunge": "LUNGE 10",
            "plank": "PLANK 30s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 4,
            "squat": "SQUAT REST",
            "lunge": "LUNGE 15",
            "plank": "PLANK 35s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 5,
            "squat": "SQUAT 70",
            "lunge": "LUNGE 15",
            "plank": "PLANK 35s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 6,
            "squat": "SQUAT 75",
            "lunge": "LUNGE 20",
            "plank": "PLANK 45s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 7,
            "squat": "SQUAT 80",
            "lunge": "LUNGE 20",
            "plank": "PLANK REST",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 8,
            "squat": "SQUAT REST",
            "lunge": "LUNGE REST",
            "plank": "PLANK 50s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 9,
            "squat": "SQUAT 100",
            "lunge": "LUNGE 30",
            "plank": "PLANK 60s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 10,
            "squat": "SQUAT 105",
            "lunge": "LUNGE 35",
            "plank": "PLANK 70s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 11,
            "squat": "SQUAT 110",
            "lunge": "LUNGE 40",
            "plank": "PLANK 80s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        },
        {
            "day": 12,
            "squat": "SQUAT REST",
            "lunge": "LUNGE 45",
            "plank": "PLANK 90s",
            "conductSquat": false,
            "conductLunge": false,
            "conductPlank": false
        }
    )
    console.log(WORKOUTS);
}

function init() {
    loadLocalJSON();
    makeTable();
}

init();