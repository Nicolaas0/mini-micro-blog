import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching data.");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          setError(null);
        })
        .catch((err) => {
          setisLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
    return { data, isLoading, isError };
};

export default useFetch;
