// var obj = {
//     "key":"value"
// }

// console.log(obj['key'])


async function getPokemon(event){
    event.preventDefault()
    console.log("Pokemon")

    var response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    var data = await response.json()
    console.log(data)
    // console.log(data.name)
    var pokeData = document.querySelector('#pokeData')
    // pokeData.innerHTML = `<li>${data.name} <img src="${data.sprites.front_default}" alt = "pokemon img"></li>
    // <li>${data.order}</li>`

    for(var i = 0; i < data.results.length; i++){
        pokeData.innerHTML += `<li>Name : ${data.results[i].name}</li>`
        pokeData.pokeSprites += `<li><img src="${data.sprites.front_default}" alt="pokemon img"></li>`
    }

}
