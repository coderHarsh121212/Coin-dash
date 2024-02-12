import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useAxios from "../useaxios/useaxios";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const HistoryChart = ({ id, day,name }) => {
  const { response } = useAxios(`coin/${id}/history?timePeriod=${day}`);
  const options = {
    responsive: true,
    plugins: {
      // legend: {
      //   position: "top",
      // },
      title: {
        display: true,
      },
    },
  };
  // console.log(response)
  const charData =
    response &&
    response.data.history.map((value) => ({
      x: value.timestamp,
      y: Number(value.price).toFixed(2),
    }));
  // console.log( moment(1704456000).format("MMM DD"))
  const data = {
    labels:
      charData && charData.map((value) => moment.unix(value.x).format("L")),
    datasets: [
      {
        label: "Price in USD",
        data: charData && charData.map((value) => value.y),
        borderColor: "rgba(201, 227, 36,0.8)",
        backgroundColor: "rgba(260, 225, 36,0.8)",
      },
    ],
  };
  return <div className="flex flex-col"><div className="flex justify-between px-3"><p className='text-yellow-500 font-bold text-lg'>{name} Price Chart</p>Change: {response &&response.data.change}%</div><div className="w-full sm:w-3/4  mx-auto border-2 ">{response && <Line options={options} data={data} />}</div></div>;
};

export default HistoryChart;
