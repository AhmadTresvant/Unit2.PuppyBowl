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

const renderAllPlayers = (state) => {
  const puppiesInLi = state.allPuppies.map((eachPup) => {
    return `<li id="${eachPup.id}">${eachPup.name}</li>`;
  });
  const puppyRosterUl = document.createElement(`ul`);
  puppyRosterUl.innerHTML = puppiesInLi.join('');
  main.appendChild(puppyRosterUl);
}

getAllPlayers();