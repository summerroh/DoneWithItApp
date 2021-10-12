//with this hook, we call API endpoints
//also takes care of the loading state

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

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return { data, error, loading, request };
}