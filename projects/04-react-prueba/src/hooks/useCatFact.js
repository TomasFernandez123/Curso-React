import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says';

export function useCatFact() {
  const [fact, setFact] = useState();
  const [firstWordFact, setFirstWordFact] = useState();

  const fetchFact = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
    setFirstWordFact(newFact.split(' ')[0]);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return { 
    fact, 
    imageURL: firstWordFact ? 
    `${CAT_ENDPOINT_IMAGE_URL}/${encodeURIComponent(firstWordFact)}`
    : '', 
    refreshFact: fetchFact }
}
