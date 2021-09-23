//with this hook, we call API endpoints

import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    // show Activityindicator while loading
    setLoading(true);
    // load the data
    const response = await apiFunc(...args);
    // hide Activityindicator when loading is done
    setLoading(false);

    // check for any errors
    if (!response.ok) return setError(true);

    // if no errors, display our data
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
}