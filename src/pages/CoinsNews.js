import React, { useState } from "react";
import ParticularNews from "../components/ParticularNews";
import RefreshPage from "../components/RefreshPage";
import useAxiosNews from "../useaxios/useaxiosNews";

const CoinsNews = () => {
  const [res, setres] = useState("1707177600895600621");
  const { response } = useAxiosNews(``);
  return (
    <>
      {!response && <RefreshPage />}
      <p className="text-yellow-500 text-3xl mx-2 my-5">Trending News</p>
      <div className="grid grid-cols-1 p-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {response &&
          response.results.map((e) => <ParticularNews data={e} key={e.url} />)}
      </div>
      <div>
     
      </div>
    </>
  );
};

export default CoinsNews;
