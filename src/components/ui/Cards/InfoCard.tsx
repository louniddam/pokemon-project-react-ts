import React, { useEffect, useState } from 'react';
import { Berry } from 'pokenode-ts';
import useAPI from '../../../hooks/useAPI';

const InfosCard: React.FC = () => {
  const { berry: {fetchBerryByName} } = useAPI()


  const [berry, setBerry] = useState<Berry | null>(null);

  useEffect(() => {
    const fetchBerryData = async () => {
      try {
        const result = await fetchBerryByName('chesto');
        if(result) setBerry(result);
        console.log(result);
        
      } catch (error) {
        console.error('Error fetching berry data:', error);
      }
    };

    fetchBerryData();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <>
      {/* Render your component based on the 'berry' state */}
      {berry && (
        <div>
          <h1>{berry.name}</h1>
          {/* Add other details you want to display */}
        </div>
      )}
    </>
  );
};

export default InfosCard;
