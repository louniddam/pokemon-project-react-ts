import { BerryRequests, PokemonRequests } from '../services';
import React, { createContext } from 'react';


// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const APIContext = createContext({
    berry: {
        fetchBerryByName : BerryRequests.fetchBerryByName,
        fetchBerryById : BerryRequests.fetchBerryById,
        fetchFirmnessByName : BerryRequests.fetchFirmnessByName,
        fetchFirmnessById : BerryRequests.fetchFirmnessById , 
        fetchFlavorByName : BerryRequests.fetchFlavorByName ,
        fetchFlavorById : BerryRequests.fetchFlavorById ,
        listBerries : BerryRequests.listBerries ,
        listBerryFirmnesses : BerryRequests.listBerryFirmnesses ,
        listBerryFlavors : BerryRequests.listBerryFlavors ,
    },
    pokemon: {
        fetchAbilityByName: PokemonRequests.fetchAbilityByName,
        fetchAbilityById: PokemonRequests.fetchAbilityById,
        fetchCharacteristicById: PokemonRequests.fetchCharacteristicById,
        fetchEggGroupByName: PokemonRequests.fetchEggGroupByName,
        fetchEggGroupById: PokemonRequests.fetchEggGroupById,
        fetchGenderByName: PokemonRequests.fetchGenderByName,
        fetchGenderById: PokemonRequests.fetchGenderById,
        fetchGrowthRateByName: PokemonRequests.fetchGrowthRateByName,
        fetchGrowthRateById: PokemonRequests.fetchGrowthRateById,
        fetchNatureByName: PokemonRequests.fetchNatureByName,
        fetchNatureById: PokemonRequests.fetchNatureById,
        fetchPokeathlonStatByName: PokemonRequests.fetchPokeathlonStatByName,
        fetchPokeathlonStatById: PokemonRequests.fetchPokeathlonStatById,
        fetchPokemonByName: PokemonRequests.fetchPokemonByName,
        fetchPokemonById: PokemonRequests.fetchPokemonById,
        fetchPokemonColorByName: PokemonRequests.fetchPokemonColorByName,
        fetchPokemonColorById: PokemonRequests.fetchPokemonColorById,
        fetchPokemonFormByName: PokemonRequests.fetchPokemonFormByName,
        fetchPokemonFormById: PokemonRequests.fetchPokemonFormById,
        fetchPokemonHabitatByName: PokemonRequests.fetchPokemonHabitatByName,
        fetchPokemonHabitatById: PokemonRequests.fetchPokemonHabitatById,
        fetchPokemonShapeByName: PokemonRequests.fetchPokemonShapeByName,
        fetchPokemonShapeById: PokemonRequests.fetchPokemonShapeById,
        fetchPokemonSpeciesByName: PokemonRequests.fetchPokemonSpeciesByName,
        fetchPokemonSpeciesById: PokemonRequests.fetchPokemonSpeciesById,
        fetchStatByName: PokemonRequests.fetchStatByName,
        fetchStatById: PokemonRequests.fetchStatById,
        fetchTypeByName: PokemonRequests.fetchTypeByName,
        fetchTypeById: PokemonRequests.fetchTypeById,
    }
});


export const APIProvider = ({ children }: { children: React.ReactElement }) => {
    // const {startLoading, stopLoading} = useLoader()

    // const run = <T extends unknown>(
    //     func: ( ...args: any[]) => Promise<T>, showLoader?: boolean, ...args: any[]
    // ): Promise<T> => {
    //     if (showLoader)
    //         startLoading()
    //     return func(...args).finally(() => {
    //         if (showLoader)
    //             stopLoading()
    //     } )
    // }

    const run = <T extends unknown>(
        func: ( ...args: any[]) => Promise<T>, ...args: any[]
    ): Promise<T> => func(...args)


    return <APIContext.Provider value={{
        berry: {
            //ajouter true ou false dans les args si on souhaite utiliser ou non le loader
            fetchBerryByName: (...args) => run(BerryRequests.fetchBerryByName, ...args),
            fetchBerryById: (...args) => run(BerryRequests.fetchBerryById, ...args),
            fetchFirmnessByName: (...args) => run(BerryRequests.fetchFirmnessByName, ...args),
            fetchFirmnessById: (...args) => run(BerryRequests.fetchFirmnessById, ...args),
            fetchFlavorByName : (...args) => run(BerryRequests.fetchFlavorByName, ...args),
            fetchFlavorById : (...args) => run(BerryRequests.fetchFlavorById , ...args),
            listBerries : (...args) => run(BerryRequests.listBerries , ...args),
            listBerryFirmnesses : (...args) => run(BerryRequests.listBerryFirmnesses , ...args),
            listBerryFlavors : (...args) => run(BerryRequests.listBerryFlavors , ...args),
        },
        pokemon: {
            fetchAbilityByName: (...args) => run(PokemonRequests.fetchAbilityByName, ...args),
            fetchAbilityById: (...args) => run(PokemonRequests.fetchAbilityById, ...args),
            fetchCharacteristicById: (...args) => run(PokemonRequests.fetchCharacteristicById, ...args),
            fetchEggGroupByName: (...args) => run(PokemonRequests.fetchEggGroupByName, ...args),
            fetchEggGroupById: (...args) => run(PokemonRequests.fetchEggGroupById, ...args),
            fetchGenderByName: (...args) => run(PokemonRequests.fetchGenderByName, ...args),
            fetchGenderById: (...args) => run(PokemonRequests.fetchGenderById, ...args),
            fetchGrowthRateByName: (...args) => run(PokemonRequests.fetchGrowthRateByName, ...args),
            fetchGrowthRateById: (...args) => run(PokemonRequests.fetchGrowthRateById, ...args),
            fetchNatureByName: (...args) => run(PokemonRequests.fetchNatureByName, ...args),
            fetchNatureById: (...args) => run(PokemonRequests.fetchNatureById, ...args),
            fetchPokeathlonStatByName: (...args) => run(PokemonRequests.fetchPokeathlonStatByName, ...args),
            fetchPokeathlonStatById: (...args) => run(PokemonRequests.fetchPokeathlonStatById, ...args),
            fetchPokemonByName: (...args) => run(PokemonRequests.fetchPokemonByName, ...args),
            fetchPokemonById: (...args) => run(PokemonRequests.fetchPokemonById, ...args),
            fetchPokemonColorByName: (...args) => run(PokemonRequests.fetchPokemonColorByName, ...args),
            fetchPokemonColorById: (...args) => run(PokemonRequests.fetchPokemonColorById, ...args),
            fetchPokemonFormByName: (...args) => run(PokemonRequests.fetchPokemonFormByName, ...args),
            fetchPokemonFormById: (...args) => run(PokemonRequests.fetchPokemonFormById, ...args),
            fetchPokemonHabitatByName: (...args) => run(PokemonRequests.fetchPokemonHabitatByName, ...args),
            fetchPokemonHabitatById: (...args) => run(PokemonRequests.fetchPokemonHabitatById, ...args),
            fetchPokemonShapeByName: (...args) => run(PokemonRequests.fetchPokemonShapeByName, ...args),
            fetchPokemonShapeById: (...args) => run(PokemonRequests.fetchPokemonShapeById, ...args),
            fetchPokemonSpeciesByName: (...args) => run(PokemonRequests.fetchPokemonSpeciesByName, ...args),
            fetchPokemonSpeciesById: (...args) => run(PokemonRequests.fetchPokemonSpeciesById, ...args),
            fetchStatByName: (...args) => run(PokemonRequests.fetchStatByName, ...args),
            fetchStatById: (...args) => run(PokemonRequests.fetchStatById, ...args),
            fetchTypeByName: (...args) => run(PokemonRequests.fetchTypeByName, ...args),
            fetchTypeById: (...args) => run(PokemonRequests.fetchTypeById, ...args),
        }
    }}>{children}</APIContext.Provider>
};

export default APIContext;