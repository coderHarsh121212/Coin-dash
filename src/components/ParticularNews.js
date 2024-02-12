import React from "react";

const ParticularNews = ({ data }) => {
  
  return (
    <div className="w-full border-2 border-yellow-500 shadow-2xl p-1 bg-cover">
      <div className="font-bold">
        <span>{data.pubDate}</span>
      </div>
      <div>
        <img src={data.image_url} className="h-full"></img>
      </div>
      <div className="font-serif font-medium hover:underline hover:text-blue-600">
        <a href={data.link}>
        {data.title}<span>....</span> </a>  
      </div>
    </div>
  );
};

export default ParticularNews;
