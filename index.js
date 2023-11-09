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
const html = `
<div>
<h2>${puppyDetails.player.name}</h2

<img src="${puppyDetails.player.imageUrl}" alt= "image of puppy"/>
<p>ID:${puppyDetails.player.id}</p>
<p>BREED:${puppyDetails.player.breed}</p>
<p>STATUS:${puppyDetails.player.status}</p>
<p>CREATED AT:${puppyDetails.player.createdAt}</p>
<p>UPDATED AT:${puppyDetails.player.updatedAt}</p>
<p>TEAM ID:${puppyDetails.player.teamId}</p>
<p>COHORT ID:${puppyDetails.player.cohortId}</p>
<button id="back-button" >Go Back To The Roster!</button>
</div>
`;
main.innerHTML = html;

const backButton = document.querySelector(`#back-button`);
backButton.addEventListener(`click`, () => {
  renderAllPlayers(state);
})
}

const renderAllPlayers = (state) => {
  const puppiesInLi = state.allPuppies.map((eachPup) => {
    return `<li id="${eachPup.id}">${eachPup.name}</li>`;
  });
  
  const puppyRosterUl = document.createElement(`ul`);
  puppyRosterUl.innerHTML = puppiesInLi.join('');
  main.replaceChildren(puppyRosterUl);

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

form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  
  const nameInput = document.querySelector(`#name`);
  const img = document.querySelector(`#img`);
  const breed = document.querySelector(`#breed`);
  const status = document.querySelector(`#status`);
  console.log(nameInput.value);
  
  const response = await fetch(`${apiLink}/players`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameInput.value,
      img: img.value,
      breed: breed.value,
      status: status.value
    })
  });

  const newPuppy = await response.json();
  console.log(newPuppy);

});






