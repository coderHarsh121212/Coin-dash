import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Market = ({ response }) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="w-full p-4 shadow-2xl flex flex-col rounded-lg"
      onClick={() => navigate(`/particularPage/${response.uuid}`)}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="text-yellow-600">
        <span className="font-sans text-lg text-black">Rank:</span>
        {response.rank}
      </div>
      <div className="w-1/2 flex gap-5 items-center">
        <img src={response.iconUrl} className="w-1/2"></img>

        <div className="w-3/4 ">
          <p className=" font-serif flex gap-1 font-medium">
            Name:
            <span className="font-sans">
              {response.name}({response.symbol})
            </span>
          </p>

          <p className="font-serif flex gap-1 font-medium">
            Price:<span className="font-sans">${response.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Market;
