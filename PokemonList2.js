import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList2 = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const typeColors = {
    fire: 'red',
    water: 'blue',
    grass: '#7ac74c',
    electric: '#f7d02c',
    psychic: '#f95587',
    ice: '#96d9d6',
    dragon: '#6f35fc',
    dark: '#705848',
    fairy: '#d685ad',
    bug: '#a6b91a',
    normal: '#a8a878',
    fighting: '#c03028',
    flying: '#a890f0',
    poison: '#a040a0',
    ground: '#e2bf65',
    rock: '#b6a136',
    ghost: '#705898',
    steel: '#b8b8d0',
    shadow: '#6e6b7e',
    unknown: '#b8b8b8'
  };

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
      .then(response => {
        const pokemonData = response.data.results;
        Promise.all(pokemonData.map(pokemon =>
          axios.get(pokemon.url).then(res => ({
            name: res.data.name,
            image: res.data.sprites.other.showdown.front_default,
            height: res.data.height,
            weight: res.data.weight,
            types: res.data.types.map(t => t.type.name).join(', '),
          })))
        )
        .then(pokemons => {
            const shuffledPokemons = pokemons.sort(() => Math.random() - 0.5);
            setPokemons(shuffledPokemons);
            setLoading(false);
        });
      })
      .catch(() => {
        setError('Error al obtener los datos.');
        setLoading(false);
      });
  }, []);

  const handleClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id='pokemon-list2'>
      <ul>
        {pokemons.map((pokemon, index) => {
          const pokemonTypes = pokemon.types.split(', ');
          const pokemonColor = typeColors[pokemonTypes[0]] || '#b8b8b8';

          return (
            <li key={index} style={{ backgroundColor: pokemonColor, cursor: 'pointer'}} onClick={() => handleClick(pokemon)}>
              <h2 style={{ textAlign: 'center', borderBottom: '4px solid white', paddingBottom: '20px',color:'white'}}>
                {pokemon.name}
              </h2>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ height: '150px', width: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              />
              <p style={{ textAlign: 'center', borderTop: '4px solid white', paddingTop: '20px',color:'white'}}><b>
                Tipo: {pokemon.types}
                </b></p>
            </li>
          );
        })}
      </ul>

      {selectedPokemon && (
        <div style={modalStyles.overlay}>
          <div style={{ ...modalStyles.modal, backgroundColor: typeColors[selectedPokemon.types.split(', ')[0]] || '#b8b8b8' }}>
            <span style={modalStyles.closeButton} onClick={closeModal}>&#10005;</span>

            <h2>{selectedPokemon.name}</h2>
            <img
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              style={{ height: '250px', width: '250px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <p><strong>Altura:</strong> {selectedPokemon.height / 10} metros</p>
            <p><strong>Peso:</strong> {selectedPokemon.weight / 10} kg</p>
            <p><strong>Tipo:</strong> {selectedPokemon.types}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    position: 'relative',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '25px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default PokemonList2;