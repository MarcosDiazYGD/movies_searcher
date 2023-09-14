import { useEffect } from "react";
import { useState } from "react";

const useFetchData = (url) => {
  const [response, setResponse] = useState({})

  useEffect(() => {
    fetch(url)
    .then( res => res.json())
    .then(data => setResponse(data))
  }, [url])

  return response
};

export default useFetchData;