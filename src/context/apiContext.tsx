import { BerryRequests } from '../services/berry';
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
    }}>{children}</APIContext.Provider>
};

export default APIContext;