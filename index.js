const form = document.querySelector(`form`);
const ol = document.querySelector(`ol`);
const input = document.querySelector(`input`);
const main = document.querySelector(`main`);
const apiLink = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf`;

const state = {
  allPuppies: [],
}

const getAllPlayers = async () => {
  const response = await fetch(`${apiLink}/players`);
  const jsonResponse = await response.json();
  state.allPuppies = jsonResponse.data.players;
  renderAllPlayers(state);
}

const init = async () => {
  await getAllPlayers();
}

const getPuppyDetails = async (id) => {
  const response = await fetch(`${apiLink}/players/${id}`);
  const responseJson = await response.json();
  const puppyDetails = responseJson.data;
  renderDetails(puppyDetails);
}

const renderDetails = (puppyDetails) => {
const html = `<h2>${puppyDetails.player.name}</h2

<img src="${puppyDetails.player.imageUrl}"/>
<p>ID:${puppyDetails.player.id}</p>
<p>BREED:${puppyDetails.player.breed}</p>
<p>STATUS:${puppyDetails.player.status}</p>
<p>CREATED AT:${puppyDetails.player.createdAt}</p>
<p>UPDATED AT:${puppyDetails.player.updatedAt}</p>
<p>TEAM ID:${puppyDetails.player.teamId}</p>
<p>COHORT ID:${puppyDetails.player.cohortId}</p>
`

main.innerHTML = html;
}

const renderAllPlayers = (state) => {
  const puppiesInLi = state.allPuppies.map((eachPup) => {
    return `<li id="${eachPup.id}">${eachPup.name}</li>`;
  });
  
  const puppyRosterUl = document.createElement(`ul`);
  puppyRosterUl.innerHTML = puppiesInLi.join('');
  main.appendChild(puppyRosterUl);

  const eachPupOnRoster = document.querySelectorAll('li');
  eachPupOnRoster.forEach((pup) => {
    pup.addEventListener('click', (event) => {
      getPuppyDetails(event.target.id);
    });
  });
}

init();

const getAllPlayersDetails = async () => {
  const response = await fetch(`${apiLink}/players`);
  const jsonResponse = await response.json();
  state.allPuppies = jsonResponse.data.players;
  renderAllPlayers(state);
}






