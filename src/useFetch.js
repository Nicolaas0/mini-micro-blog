import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching data.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch abort');
          } else {
           setisLoading(false);
           setError(err.message); 
          }
        });
    }, 1000);

    return () => abortCont.abort();

  }, [url]);
    return { data, isLoading, isError };
};

export default useFetch;
