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
  console.log(state.allPuppies);
}

getAllPlayers();