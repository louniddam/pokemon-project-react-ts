import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import useAPI from '../../../hooks/useAPI';
import renderAllSprites from '../../../utils/renderSprites';

const InfosCard: React.FC = () => {
  const { pokemon: { fetchPokemonByName, fetchStatByName } } = useAPI();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const result = await fetchPokemonByName('ho-oh');
        const test = await fetchStatByName('1')
        if (result) setPokemon(result);
        console.log(result);
        console.log(test);
        
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          {renderAllSprites(pokemon.sprites)}
        </div>
      )}
    </>
  );
};

export default InfosCard;