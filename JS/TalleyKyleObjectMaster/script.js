const pokemon = Object.freeze([
	{ id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
	{ id: 5, name: "Charmeleon", types: ["fire"] },
	{ id: 9, name: "Blastoise", types: ["water"] },
	{ id: 12, name: "Butterfree", types: ["bug", "flying"] },
	{ id: 16, name: "Pidgey", types: ["normal", "flying"] },
	{ id: 23, name: "Ekans", types: ["poison"] },
	{ id: 24, name: "Arbok", types: ["poison"] },
	{ id: 25, name: "Pikachu", types: ["electric"] },
	{ id: 35, name: "Clefairy", types: ["normal"] },
	{ id: 37, name: "Vulpix", types: ["fire"] },
	{ id: 52, name: "Meowth", types: ["normal"] },
	{ id: 63, name: "Abra", types: ["psychic"] },
	{ id: 67, name: "Machamp", types: ["fighting"] },
	{ id: 72, name: "Tentacool", types: ["water", "poison"] },
	{ id: 74, name: "Geodude", types: ["rock", "ground"] },
	{ id: 87, name: "Dewgong", types: ["water", "ice"] },
	{ id: 98, name: "Krabby", types: ["water"] },
	{ id: 115, name: "Kangaskhan", types: ["normal"] },
	{ id: 122, name: "Mr. Mime", types: ["psychic"] },
	{ id: 133, name: "Eevee", types: ["normal"] },
	{ id: 144, name: "Articuno", types: ["ice", "flying"] },
	{ id: 145, name: "Zapdos", types: ["electric", "flying"] },
	{ id: 146, name: "Moltres", types: ["fire", "flying"] },
	{ id: 148, name: "Dragonair", types: ["dragon"] },
]);

const divByThree = pokemon.filter((p) => p.id % 3 === 0);
console.log(divByThree);

const typeFire = pokemon.filter((p) => p.types[0] === "fire");
console.log(typeFire);

const moreThanOne = pokemon.filter((p) => p.types[1]);
console.log(moreThanOne);

const justTheNames = pokemon.map((p) => p.name);
console.log(justTheNames);

console.log(pokemon.filter((p) => p.id > 99).map(({name}) => name))

// const typePoison = pokemon.filter((p) => p.types[0] === "poison");
// console.log(typePoison);

console.log(pokemon.filter(({types}) => types.length == 1 && types[0] === "poison").map(({name}) => name));

console.log(pokemon.filter(({types}) => types.length == 2 && types[1] === "flying").map(({types: [firstType]}) => firstType));

console.log(pokemon.filter(({types}) => types[0] === "normal").length);

console.log(pokemon.filter(p => p.id != 148));


console.log(pokemon.map(pokemon => pokemon.id != 35 ? pokemon : {...pokemon, types: ["fairy"]}));
