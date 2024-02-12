import React from "react";
import Links from "./Links";
const Coininfo = ({ response }) => {
  function FormatNumers(num) {
    let num1 = num;
    let numlength = 0;
    while (num1 > 9) {
      num1 = num1 / 10;
      numlength++;
    }
    if (numlength >= 4 && numlength <= 5) {
      return Number((num / 1000).toFixed(2)) + " K";
    }
    if (numlength >= 6 && numlength <= 8) {
      return Number((num / 1000000).toFixed(2)) + " M";
    }
    if (numlength >= 9 && numlength <= 11) {
      return Number((num / 1000000000).toFixed(2)) + " B";
    }
    if (numlength >= 12) {
      return Number((num / 1000000000000).toFixed(2)) + " T";
    }
    return num;
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-1 px-3 py-1 font-serif text-center sm:text-left">
          <p className="text-blue-500 font-sans text-xl">
            {response.data.coin.name} Value Statistics
          </p>
          <p>An overview showing the stats of {response.data.coin.name}</p>
          <div className=" shadow-2xl border-2 p-5 w-4/5 mx-auto font-sans sm:mx-0">
            <div className="flex justify-between border-b-2">
              <p>Price to USD</p>
              <p className="font-bold">
                ${FormatNumers(response.data.coin.price)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>allTimeHigh</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.allTimeHigh.price)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>allTimeHigh</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.allTimeHigh.price)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>marketCap</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.marketCap)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>#Rank</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.rank)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 px-3 py-1 font-serif text-center ">
          <p className="text-blue-500 font-sans text-xl">Other Statistics</p>
          <p>An overview showing the stats of all cryptocurrencies.</p>
          <div className=" shadow-2xl border-2 p-5 w-4/5 mx-auto font-sans">
            <div className="flex justify-between border-b-2">
              <p>numberOfMarkets</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.numberOfMarkets)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>numberOfExchanges</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.numberOfExchanges)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>Total Supply</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.supply.total)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>Approved Supply</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.supply.confirmed)}
              </p>
            </div>
            <div className="flex justify-between border-b-2">
              <p>circulating Supply</p>
              <p className="font-bold">
                {FormatNumers(response.data.coin.supply.circulating)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-5 sm:flex gap-5 sm:justify-between">
        <div className="text-blue-600 font-serif w-full sm:w-1/2">
          {response.data.coin.description}
        </div>
        <div className="w-full sm:w-1/2">
          <p className="text-blue-600 font-serif w-full text-xl">
            {response.data.coin.name} Links:
          </p>
          <div className=" border-2 shadow-2xl p-3">
            {response.data.coin.links.map((e) => (
              <Links response={e} key={e.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coininfo;
