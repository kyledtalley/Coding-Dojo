export const geoApiOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "4d16f43afemsh94bce440fc498c3p124404jsnd89364699095",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
}

export const GEO_API_URL ="https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "f45a4285a63301ea33fd0dd69898f88c";

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", options)
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((err) => console.log(err))

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
