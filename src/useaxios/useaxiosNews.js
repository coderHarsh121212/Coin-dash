import React, { useState, useEffect } from "react";
import axios from "axios";
const useAxiosNews = (param) => {
  // console.log(param)
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function fetchNews() {
    try {
      setPending(true);
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_37755c5b05d3d1aa0988a9e034d4d065d3f3b&q=crypto&language=en&${param}`
      );
const res = await response.json()
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }
  useEffect(() => {
    fetchNews(param);
  }, [param]);
  return { response, error, pending };
};

export default useAxiosNews;
