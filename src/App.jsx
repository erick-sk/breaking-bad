import { useState, useEffect } from 'react';

import Quote from './components/Quote';
import Logo from './components/Logo';

function App() {
  const [phrase, setPhrase] = useState({});

  // get data from api
  const callingTheApi = async () => {
    try {
      const url = 'https://www.breakingbadapi.com/api/quote/random';

      fetch(url)
        .then((response) => response.json())
        .then((data) => setPhrase(data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  // call to api
  useEffect(() => {
    callingTheApi();
  }, []);

  return (
    <>
      <Logo />
      <Quote phrase={phrase} callingTheApi={callingTheApi} />
    </>
  );
}

export default App;
