const image = document.querySelector('#image');
const pokename = document.querySelector('#pokename');
const poketypes = document.querySelector('#types');
const pokestats = document.querySelector('#stats');
const pokemon = document.querySelector('#pokemon');



const searchPokemon = event =>{
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        

}
const renderPokemonData = data =>{
    const sprite = data.sprites.front_default;
    const{stats, types} = data;
    pokename.textContent = `No ${data.id} ${data.name}`;
    
    image.setAttribute('src', sprite);
    poketypes.innerHTML = '';
    types.forEach(type =>{
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        poketypes.appendChild(typeTextElement);
    })
    
    renderPokemonStats(stats);
    pokemon.value = "";
}
const renderPokemonStats =stats =>{
    pokestats.innerHTML = '';
    stats.forEach(stat =>{
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent  = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokestats.appendChild(statElement);
    })
}