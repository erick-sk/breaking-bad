import { useState, useEffect } from 'react';

import Quote from './components/Quote';
import Logo from './components/Logo';

function App() {
  const [phrase, setPhrase] = useState({});

  // call to api
  useEffect(() => {
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
    callingTheApi();
  }, []);

  return (
    <>
      <Logo />
      <Quote phrase={phrase} />
    </>
  );
}

export default App;
