import React, { useEffect, useState } from "react";
import axios from "axios";
const useAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  async function fetchDetails(param) {
    try {
      setPending(true);
      const record = await axios.get(`https://api.coinranking.com/v2/${param}`);
      https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history?timePeriod=7d
      setResponse(record.data);
    } catch (err) {
      setError(err);
    } finally {
      setPending(false);
    }
  }
  useEffect(() => {
    fetchDetails(param);
  }, [param]);
  return { response, error, pending };
};

export default useAxios;
