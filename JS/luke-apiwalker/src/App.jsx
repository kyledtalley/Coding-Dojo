import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personDetails, setPersonDetails] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planetDetails, setPlanetDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
        const formattedData = response.data.results.map(item => ({
          id: item.url.split("/").filter(Boolean).pop(),
          name: item.name,
          url: item.url
        }));
        setPeopleData(formattedData);

        const totalPeople = response.data.count;
        const numberOfPages = Math.ceil(totalPeople / 10); // SWAPI returns 10 results per page
        setTotalPages(numberOfPages);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
      setLoading(false);
    };

    fetchPeople();

    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanetData(response.data.results.map(item => ({
          id: item.url.split("/").filter(Boolean).pop(),
          name: item.name,
          url: item.url
        })));
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, [currentPage]);

  const handlePersonChange = async (event) => {
    const selected = peopleData.find(person => person.id === event.target.value);
    setSelectedPerson(selected);
    if (selected) {
      try {
        const personResponse = await axios.get(selected.url);
        const homeworldResponse = await axios.get(personResponse.data.homeworld);
        setPersonDetails({
          ...personResponse.data,
          homeworld: homeworldResponse.data.name
        });
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    }
  };

  const handlePlanetChange = async (event) => {
    const selected = planetData.find(planet => planet.id === event.target.value);
    setSelectedPlanet(selected);
    if (selected) {
      try {
        const planetResponse = await axios.get(selected.url);
        setPlanetDetails(planetResponse.data);
      } catch (error) {
        console.error('Error fetching planet details:', error);
      }
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <select onChange={handlePersonChange} defaultValue="">
            <option value="" disabled>Select a person</option>
            {peopleData.map(person => (
              <option key={person.id} value={person.id}>
                {person.name}
              </option>
            ))}
          </select>
          <select onChange={handlePlanetChange} defaultValue="">
            <option value="" disabled>Select a planet</option>
            {planetData.map(planet => (
              <option key={planet.id} value={planet.id}>
                {planet.name}
              </option>
            ))}
          </select>
          {personDetails && (
            <div>
              <h3>Selected Person:</h3>
              <p>Name: {personDetails.name}</p>
              <p>Height: {personDetails.height}</p>
              <p>Hair Color: {personDetails.hair_color}</p>
              <p>Eye Color: {personDetails.eye_color}</p>
              <p>Mass: {personDetails.mass}</p>
              <p>Birth Year: {personDetails.birth_year}</p>
              <p>Gender: {personDetails.gender}</p>
              <p>Homeworld: {personDetails.homeworld}</p>
            </div>
          )}
          {planetDetails && (
            <div>
              <h3>Selected Planet:</h3>
              <p>Name: {planetDetails.name}</p>
              <p>Rotation Period: {planetDetails.rotation_period}</p>
              <p>Orbital Period: {planetDetails.orbital_period}</p>
              <p>Diameter: {planetDetails.diameter}</p>
              <p>Climate: {planetDetails.climate}</p>
              <p>Gravity: {planetDetails.gravity}</p>
              <p>Terrain: {planetDetails.terrain}</p>
              <p>Population: {planetDetails.population}</p>
            </div>
          )}
          <div>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
