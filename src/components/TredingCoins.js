import React, { useState } from "react";
import useAxios from "../useaxios/useaxios";
import Coin from "./Coin";

const TredingCoins = () => {
  const { response } = useAxios("coins/");
  const [counter, setcounter] = useState(0);
  return (
    <div className="px-5">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between ">
        <h1 className="font-serif text-3xl font-normal">
          Top<span className="text-yellow-500"> Trending </span>Coins
        </h1>
        <div className="flex items-center gap-5">
          <h1 className="font-semibold text-xl">TOP:</h1>
          <select
            className="px-5 border-2 border-gray-600 p-2 rounded-lg hover:bg-gray-200"
            onChange={(e) => setcounter(e.target.value)}
          >
            <option value="0">10</option>
            <option value="1">20</option>
            <option value="2">30</option>
            <option value="3">40</option>
            <option value="4">50</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 max-[662px]:flex max-[662px]:flex-col">
        {response &&
          response.data.coins
            .slice(counter * 10, 10 * counter + 10)
            .map((e) => <Coin response={e} key={e.uuid} />)}
      </div>
    </div>
  );
};

export default TredingCoins;
