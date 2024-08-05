import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading]  = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data with a delay of 1 second, to demonstrate the loading state
    setTimeout(() => {
      // Fetch all blogs 
      fetch(url)
        // Get the response object and get the data as json
        .then(res => {
            // Check if the response was successful, if not throw an error 
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }  
            return res.json();
          })
        // Get the data from the json response and set the state
        .then((data) => {
            setError(null);  // Clear any previous error message  
            setData(data);   // Update data state  
            setIsLoading(false); // Clear loading state  
          })
        // Handle any errors that occur during the fetch
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        })
    }, 1000); 
  },[url]); // [url] will only run once on the initial render or if the url has changed

  return { data, isLoading, error };

};

export default useFetch;