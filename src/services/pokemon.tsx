import { PokemonClient,
    Ability,
    Characteristic,
    EggGroup,
    Gender,
    GrowthRate,
    Nature,
    PokeathlonStat,
    Pokemon,
    PokemonColor,
    PokemonForm,
    PokemonHabitat,
    PokemonShape,
    PokemonSpecies,
    Stat,
    Type,

  } from 'pokenode-ts';

export class PokemonRequests {

    public static async fetchAbilityByName(name: string): Promise<Ability | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getAbilityByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchAbilityById(id: number): Promise<Ability | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getAbilityById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchCharacteristicById(id: number): Promise<Characteristic | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getCharacteristicById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchEggGroupByName(name: string): Promise<EggGroup | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getEggGroupByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchEggGroupById(id: number): Promise<EggGroup | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getEggGroupById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchGenderByName(name: string): Promise<Gender | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getGenderByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchGenderById(id: number): Promise<Gender | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getGenderById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchGrowthRateByName(name: string): Promise<GrowthRate | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getGrowthRateByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchGrowthRateById(id: number): Promise<GrowthRate | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getGrowthRateById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchNatureByName(name: string): Promise<Nature | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getNatureByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchNatureById(id: number): Promise<Nature | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getNatureById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokeathlonStatByName(name: string): Promise<PokeathlonStat | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokeathlonStatByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokeathlonStatById(id: number): Promise<PokeathlonStat | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokeathlonStatById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonByName(name: string): Promise<Pokemon | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonById(id: number): Promise<Pokemon | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }

      public static async fetchPokemonColorByName(name: string): Promise<PokemonColor | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonColorByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonColorById(id: number): Promise<PokemonColor | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonColorById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonFormByName(name: string): Promise<PokemonForm | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonFormByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonFormById(id: number): Promise<PokemonForm | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonFormById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonHabitatByName(name: string): Promise<PokemonHabitat | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonHabitatByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonHabitatById(id: number): Promise<PokemonHabitat | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonHabitatById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonShapeByName(name: string): Promise<PokemonShape | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonShapeByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonShapeById(id: number): Promise<PokemonShape | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonShapeById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonSpeciesByName(name: string): Promise<PokemonSpecies | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonSpeciesByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchPokemonSpeciesById(id: number): Promise<PokemonSpecies | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getPokemonSpeciesById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchStatByName(name: string): Promise<Stat | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getStatByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchStatById(id: number): Promise<Stat | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getStatById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchTypeByName(name: string): Promise<Type | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getTypeByName(name);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
      
      public static async fetchTypeById(id: number): Promise<Type | undefined> {
        const api = new PokemonClient();
      
        try {
          const result = await api.getTypeById(id);
          console.log(result);
          return result;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }
};
