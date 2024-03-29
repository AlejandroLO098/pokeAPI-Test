document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `<div>
      <img
        src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}"
        alt="${data.name}"
      />
    </div>
    <div class="pokemonInfo">
      <h1>${data.name}</h1>
      <p>Type: ${data.types.type[0]}</p>
      <p>Weight: ${data.weight}</p>
    </div>`;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
