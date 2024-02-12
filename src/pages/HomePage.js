import React, { useEffect } from "react";
import RefreshPage from "../components/RefreshPage";
import TredingCoins from "../components/TredingCoins";
import useaxios from "../useaxios/useaxios";
import Aos from "aos";
import 'aos/dist/aos.css'
const HomePage = () => {
  const { response } = useaxios("coins/");
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
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className=" w-full h-screen">
      {!response && <RefreshPage />}
      {response && (
        <div className="p-5" >
          <div className="font-sans text-2xl text-center" data-aos="fade-down">
            Global <span className="text-yellow-500 font-medium">Crypto</span>{" "}
            Statistics
          </div>
          <div className="flex flex-wrap gap-6 items-center justify-center my-5 sm:grid sm:grid-cols-2">
            <div className="flex flex-col shadow-2xl w-full p-5 max-[479px]:w-full hover:hover-bg hover:-translate-y-2"  data-aos="flip-right">
              <span className="font-serif text-xl ">Total Coins:</span>
              {FormatNumers(response.data.stats.totalCoins)}
            </div>
            <div className="flex flex-col shadow-2xl w-full p-5 max-[479px]:w-full hover:hover-bg hover:-translate-y-2" data-aos="flip-right">
              <span className="font-serif text-xl">Total Markets:</span>
              {FormatNumers(response.data.stats.totalMarkets)}
            </div>
            <div className="flex flex-col shadow-2xl w-full p-5 max-[479px]:w-full hover:hover-bg hover:-translate-y-2" data-aos="flip-right">
              <span className="font-serif text-xl">Total Exchanges:</span>
              {FormatNumers(response.data.stats.totalExchanges)}
            </div>
            <div className="flex flex-col shadow-2xl w-full p-5 max-[479px]:w-full hover:hover-bg hover:-translate-y-2" data-aos="flip-right">
              <span className="font-serif text-xl">Total MarketCap:</span>
              {FormatNumers(response.data.stats.totalMarketCap)}
            </div>
            <div className="flex flex-col shadow-2xl w-full p-5 max-[479px]:w-full hover:hover-bg hover:-translate-y-2">
              <span className="font-serif text-xl">Total 24hVolume:</span>
              {FormatNumers(response.data.stats.total24hVolume)}
            </div>
          </div>
        </div>
      )}
      <TredingCoins />
    </div>
  );
};

export default HomePage;
