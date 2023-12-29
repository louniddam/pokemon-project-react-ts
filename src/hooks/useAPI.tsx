import { useContext } from 'react';
import APIContext from '../context/apiContext';

// ==============================|| API HOOKS ||============================== //

const useAPI = () => useContext(APIContext);

export default useAPI;