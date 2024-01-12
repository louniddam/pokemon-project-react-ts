import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

interface PokemonInfosCardProps {
    pokemon: Pokemon
}

const PokemonInfosCard: React.FC<PokemonInfosCardProps> = ({pokemon}) => {
  //hook

  //Method   

  //useEffect
  useEffect(() => {

  }, []);

  return (
    <>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>

        </div>
      )}
    </>
  );
};

export default PokemonInfosCard;