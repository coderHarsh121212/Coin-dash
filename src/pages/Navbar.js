import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Close, HamBurger, SymbolLogo, SymbolLogo1 } from "../icons/icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
    <div className="bg-black flex justify-between p-4 items-center ">
      <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
        <HamBurger />
      </div>
      {showNav == true ? (
        <div className="fixed h-screen bg-black w-56 p-15 bottom-0  left-0 sm:hidden z-40">
          <div
            className=" absolute top-5 right-5"
            onClick={() => setShowNav(!showNav)}
          >
            <Close />
          </div>
          <div className="h-1/3 flex justify-center text-yellow-500 py-10">
            <SymbolLogo />
          </div>
          <div className=" flex flex-col items-center  gap-10 left-0 text-white text-2xl font-sans">
            <Link to={"/"}>
              <p className=" hover:border-b-2 hover:border-yellow-500">Home</p>
            </Link>
            <Link to={"totalCoins"}>
              <p className=" hover:border-b-2 hover:border-yellow-500">
                Market
              </p>
            </Link>
            <Link to={"coinNews"}>
              <p className=" hover:border-b-2 hover:border-yellow-500">News</p>
            </Link>
          </div>
          <div className="h-full flex justify-center text-yellow-500  pt-28">
            <SymbolLogo />
          </div>
        </div>
      ) : null}

      <div className="text-lg text-white font-sans  sm:text-2xl flex items-center">
        <span className="sm:block hidden text-yellow-500">
          <SymbolLogo1 />
        </span>
        Coin<span className="text-yellow-500">Bit</span>
      </div>
      <div className=" items-center  gap-10  text-white text-2xl font-sans px-7 hidden sm:flex">
        <Link to={"/"}>
          <p className=" hover:border-b-2 hover:border-yellow-500">Home</p>
        </Link>
        <Link to={"totalCoins"}>
          <p className=" hover:border-b-2 hover:border-yellow-500">Market</p>
        </Link>
        <Link to={"coinNews"}>
          <p className=" hover:border-b-2 hover:border-yellow-500">News</p>
        </Link>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;
