import React, { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

const Template: React.FC = () => {
  //hook
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  //Method

  //useEffect
  useEffect(() => {

  }, []);

  return (
    <>
    </>
  );
};

export default Template;