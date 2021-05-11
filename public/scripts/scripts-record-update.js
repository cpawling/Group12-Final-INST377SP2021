async function formSelection() {
  /* Buttons */
  const addBtn = document.querySelector('#addButton');
  const updateBtn = document.querySelector('#updateButton');
  const deleteBtn = document.querySelector('#deleteButton');

  /* Forms */
  const addForm = document.querySelector('#addRecordSubmit');
  const updateForm = document.querySelector('#updateRecordSubmit');
  const delForm = document.querySelector('#deleteRecordSubmit');

  // add button click functionality
  addBtn.onclick = (event) => {
    event.preventDefault();

    addForm.classList.remove('hidden');
    updateForm.classList.add('hidden');
    delForm.classList.add('hidden');
  };

  // update button click functionality
  updateBtn.onclick = (event) => {
    event.preventDefault();

    updateForm.classList.remove('hidden');
    addForm.classList.add('hidden');
    delForm.classList.add('hidden');
  };

  // delete button click functionality
  deleteBtn.onclick = (event) => {
    event.preventDefault();

    delForm.classList.remove('hidden');
    addForm.classList.add('hidden');
    updateForm.classList.add('hidden');
  };
}

async function generateTeamsDropDown() {
  console.log('entered generateTeamsDropDown');

  // const variable declarations
  const teamEndpoint = '/api/team_info';
  const request = await fetch(teamEndpoint);
  const results = document.querySelector('#playerTeam');

  // check successful request
  if (request.ok) {
    console.log('teamEndpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const teams = await request.json();

  teams.forEach((team) => {
    const newTeam = document.createElement('option');
    newTeam.innerHTML = `${team.team_location} ${team.team_name}`;
    newTeam.classList.add(team.team_id);

    results.append(newTeam);
  });
}

function calculateAge(dob) {
  console.log('entered calculateAge');

  const dobInput = dob.split`-`.map((x) => +x);
  const pYear = dobInput[0];
  const pMonth = dobInput[1];
  const pDay = dobInput[2];

  // UTC function is 0 indexed for month and day
  const playerDOB = new Date(Date.UTC(pYear, (pMonth + 1), (pDay + 1)));
  const today = new Date();

  const diff = today - playerDOB;

  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
}

async function getTeamId(teamInput) {
  console.log('entered getTeamId');

  const inputs = teamInput.split(' ');
  console.log('inputs: ', inputs);

  // const variable declarations
  const teamEndpoint = '/api/team_info';
  const request = await fetch(teamEndpoint);

  // check successful request
  if (request.ok) {
    console.log('teamEndpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  // successful request, create Object for data
  const teams = await request.json();

  let teamId = -1;

  teams.forEach((team) => {
    if ((team.team_name === inputs[inputs.length - 1])) {
      teamId = team.team_id;
    }
  });

  console.log('teamId: ', teamId);
  return teamId;
}

async function getPlayerId(fName, lName) {
  console.log('entered getPlayerId');

  // const variable declarations
  const playerEndpoint = '/api/player_info';
  const request = await fetch(playerEndpoint);

  // check successful request
  if (request.ok) {
    console.log('playerEndpoint fetched');
  } else {
    alert(`HTTP-Error: ${request.status}`);
  }

  const players = await request.json();

  let playerId = -1;

  players.forEach((player) => {
    if ((player.first_name === fName) && (player.last_name === lName)) {
      playerId = player.player_id;
    }
  });

  return playerId;
}

async function windowActions() {
  console.log('loaded Record Update window');

  await formSelection();

  await generateTeamsDropDown();

  const addForm = document.querySelector('#addRecordSubmit');

  addForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Player Info seciton
    const playerFirstName = document.querySelector('#playerFirstName');
    const playerLastName = document.querySelector('#playerLastName');
    const playerSalary = document.querySelector('#playerSalary');
    const jerseyNumber = document.querySelector('#jerseyNumber');
    const playerPosition = document.querySelector('#playerPosition');
    const playerCollege = document.querySelector('#playerCollege');
    const playerDebut = document.querySelector('#playerDebut');

    // Player Biostats seciton
    const playerBirthdate = document.querySelector('#playerBirthdate');
    const playerHeight = document.querySelector('#playerHeight');
    const playerWeight = document.querySelector('#playerWeight');

    // team dropdown inside event listener for after team selection made
    const playerTeam = document.querySelector('#playerTeam');
    const playerTeamId = getTeamId(playerTeam.value);

    // age calculation
    const playerAge = calculateAge(playerBirthdate.value);

    console.info('Add Player Form Submitted', event.target);

    const postInfo = await fetch('/api/player_info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          first_name: playerFirstName.value,
          last_name: playerLastName.value,
          salary: playerSalary.value,
          jersey_number: jerseyNumber.value,
          position: playerPosition.value,
          player_college: playerCollege.value,
          nba_debut: playerDebut.value,
          team_id: playerTeamId.value
        }
      )
    });

    const postBiostats = await fetch('/api/player_biostats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          birthdate: playerBirthdate.value,
          age: playerAge,
          height_inches: playerHeight.value,
          weight_pounds: playerWeight.value
        }
      )
    });

    console.log('New player added');
  });

  const updateForm = document.querySelector('#updateRecordSubmit');

  updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.info('Player Stat Update Form Submitted', event.target);

    // Player name seciton
    const updateFirstName = document.querySelector('#pFirstName');
    const updateLastName = document.querySelector('#pLastName');

    // stat dropdown inside event listener for after stat upadte selection
    const statCategory = document.querySelector('#updatedStat');
    const statInput = document.querySelector('#statInput');
    console.log('Player Name: ', updateFirstName.value, updateLastName.value);
    console.log('statCategory: ', statCategory.value);
    console.log('statInput: ', statInput.value);

    const putBiostats = await fetch('/api/player_stats', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
        //   statCategory: statInput.value
        }
      )
    });

    console.log('Player stat updated');
  });

  const deleteForm = document.querySelector('#deleteRecordSubmit');

  deleteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.info('Remove Player Form Submitted', event.target);

    // Player name seciton
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');

    const playerId = await getPlayerId(firstName.value, lastName.value);
    console.log('playerId: ', playerId);

    const deleteBiostats = await fetch(`/api/player_stats/${playerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          player_id: playerId
        }
      )
    });

    const deletePlayerInfo = await fetch(`/api/player_info/${playerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          player_id: playerId
        }
      )
    });

    console.log('Player record removed');
  });

}

window.onload = windowActions;