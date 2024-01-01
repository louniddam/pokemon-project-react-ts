import { BerryClient, Berry, BerryFirmness, BerryFlavor, NamedAPIResourceList } from 'pokenode-ts';

export class BerryRequests {

  public static async fetchBerryByName(name: string): Promise<Berry | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.getBerryByName(name);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async fetchBerryById(id: number): Promise<Berry | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.getBerryById(id);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async fetchFirmnessByName(name: string): Promise<BerryFirmness | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.getBerryFirmnessByName(name);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async fetchFirmnessById(id: number): Promise<BerryFirmness | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.getBerryFirmnessById(id);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async fetchFlavorByName(name: string): Promise<BerryFlavor | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.getBerryFlavorByName(name);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async fetchFlavorById(id: number): Promise<BerryFlavor | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.getBerryFlavorById(id);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async listBerries(params?: { offset?: number; limit?: number }): Promise<NamedAPIResourceList | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.listBerries(params?.offset, params?.limit);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async listBerryFirmnesses(params?: { offset?: number; limit?: number }): Promise<NamedAPIResourceList | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.listBerryFirmnesses(params?.offset, params?.limit);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public static async listBerryFlavors(params?: { offset?: number; limit?: number }): Promise<NamedAPIResourceList | undefined> {
    const api = new BerryClient();

    try {
      const result = await api.listBerryFlavors(params?.offset, params?.limit);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
};
