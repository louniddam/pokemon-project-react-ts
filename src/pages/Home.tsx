import React, { useState, useEffect } from 'react';
import { PokemonClient } from 'pokenode-ts';

const Home: React.FC = () => {
    const [pokemonName, setPokemonName] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new PokemonClient();
                const data = await api.getPokemonByName('luxray');
                setPokemonName(data.name);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []); // La dépendance vide signifie que cela ne s'exécute qu'une fois après le montage du composant

    return (
        <div>
            {pokemonName !== null ? (
                <p>Pokemon Name: {pokemonName}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;