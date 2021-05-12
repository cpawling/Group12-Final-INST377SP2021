// Fetch TeamInfo //
const teamendpoint = '/api/team-custom';
const teamlist = [];

const searchInput = document.querySelector('.input');
const teaminfo2 = document.querySelector('.TeamInfo');

fetch(teamendpoint)
  .then((blob) => blob.json())
  .then((data) => teamlist.push(...data));

function findMatches(wordToMatch, teamlist) {
  return teamlist.filter((team) => {
    const regex = new RegExp(`^${wordToMatch}`, 'gi');
    return team.team_name.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, teamlist);
  const html = matchArray.map((team) => {
    const regex = new RegExp(this.value, 'gi');
    // .replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
      <div class="box">
        <span class="name">${team.team_location} ${team.team_name}</span>
        <br>
        <span class="Year">Year of Team Foundation: ${team.year_founded}</span>
        <br>
        <span class="Stadium">Home Stadium: ${team.stadium_name}</span>
        <br>
        <span class="Players">Roster Size: ${team.roster_size}</span>
        <br>
        <span class="Owner">Owner: ${team.owner}</span>
        <br>
        <span class="Head Coach">Head Coach: ${team.head_coach}</span>
        <br>
        <span class="General Manager">General Manager: ${team.general_manager}</span>
        <br>
        <span class="Head Physician">Head Physician: ${team.head_physician}</span>
        <br>
        <span class="CEO">Team CEO: ${team.ceo}</span>
        <br>
        <span class="CFO">Team CFO: ${team.cfo}</span>
      </div>
      </li>
    `;
  }).join('');
  teaminfo2.innerHTML = html;
}

// backspace/delete clears result list, markers, and resets map
function clearResults(e) {
  if (e.keyCode === 8) {
    console.log('delete pressed');

    // remove results list
    while (teaminfo2.firstChild) {
      teaminfo2.removeChild(teaminfo2.firstChild);
    }
  }
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// backspace/delete event listener
searchInput.addEventListener('keyup', clearResults);