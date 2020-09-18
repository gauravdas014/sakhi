import { useState, useEffect } from "react";
import Axios from "axios";

const useFetch = (config) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    Axios(config)
      .then((res) => {
        setLoading(false);
        setData(res.data.reverse());
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    return () => {
      // cleanup
    };
  }, []);

  return [data, error, loading];
};

export default useFetch;
