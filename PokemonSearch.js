import React, { useState } from 'react';
import axios from 'axios';

function PokemonSearch() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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

  function fetchPokemon() {
    setError('');
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then(response => {
        setPokemon({
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other.showdown.front_default,
          type: response.data.types.map(t => t.type.name).join(', '),
          height: response.data.height,
          weight: response.data.weight,
        });
      })
      .catch(() => setError('Pokémon no encontrado.'));
  }

  let pokemonColor = '#b8b8b8';

  if (pokemon) {
    const pokemonTypes = pokemon.type.split(', ');
    pokemonColor = typeColors[pokemonTypes[0]] || '#b8b8b8';
  }

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div id="pokemon-search">
      <h1>Buscar Pokémon</h1>
      <input
        type="text"
        placeholder="Nombre o ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetchPokemon}>Buscar</button>

      {error && <p>{error}</p>}

      {pokemon && !modalOpen && (
        <div id='pokemon-search-info' style={{ backgroundColor: pokemonColor }}>
          <h2 style={{ textAlign: 'center', borderBottom: '4px solid black', paddingBottom: '20px' }}>ID: {pokemon.id} | {pokemon.name}</h2>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{ height: '150px', width: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }}
            onClick={openModal}
          />
          <p style={{ textAlign: 'center', borderTop: '4px solid black', paddingTop: '10px' }}>
            Tipo: {pokemon.type}
          </p>
        </div>
      )}

      {modalOpen && pokemon && (
        <div style={modalStyles.overlay}>
          <div style={{ ...modalStyles.modal, backgroundColor: pokemonColor }}>
            <span style={modalStyles.closeButton} onClick={closeModal}>&#10005;</span>

            <h2>ID: {pokemon.id} | {pokemon.name}</h2>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ height: '150px', width: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <p><strong>Tipo:</strong> {pokemon.type}</p>
            <p><strong>Altura:</strong> {pokemon.height / 10} metros</p>
            <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          </div>
        </div>
      )}
    </div>
  );
}

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

export default PokemonSearch;