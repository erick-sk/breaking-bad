import { useState, useEffect, useRef } from 'react';
import Quote from './components/Quote';
import Logo from './components/Logo';

function App() {
  const [phrase, setPhrase] = useState({});
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef();
  loadingRef.current = loading;

  // get data from api
  const callingTheApi = async () => {
    setLoading(true);

    if (loadingRef.current) return;

    const url = 'https://www.breakingbadapi.com/api/quote/random';

    try {
      const response = await fetch(url);
      const data = await response.json();
      return setPhrase(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // call to api
  useEffect(() => {
    callingTheApi();
  }, []);

  return (
    <>
      <Logo />
      <Quote phrase={phrase} callingTheApi={callingTheApi} loading={loading} />
    </>
  );
}

export default App;
