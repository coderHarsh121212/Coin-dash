import React, { useState } from "react";
import Market from "../components/Market";
import useAxios from "../useaxios/useaxios";

const TotalCoinPage = () => {
  const [currency, setCurrency] = useState("");
  const { response } = useAxios(`search-suggestions?query=${currency}`);
  return (
    <div>
      <div className="flex justify-between p-5 flex-col sm:flex-row gap-4 items-center">
        <form className="">
          <input
            type="text"
            placeholder="Search For Coin"
            className="p-3 rounded-md border-2 border-gray-500"
            onChange={(e) => setCurrency(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-5 max-[662px]:flex max-[662px]:flex-col">
        {response &&
          response.data.coins.map((e) => <Market response={e} key={e.uuid} />)}
      </div>
    </div>
  );
};

export default TotalCoinPage;
