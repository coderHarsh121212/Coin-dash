import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import Coininfo from '../components/Coininfo'
import HistoryChart from '../components/HistoryChart'
import RefreshPage from '../components/RefreshPage'
import useAxios from '../useaxios/useaxios'
const ParticularPage = () => {
    const {id} = useParams()
    const {response} = useAxios(`coin/${id}`)
    const[day,setDay] = useState("24h")
function handleChange(e){
setDay(e.target.value)
}
  return (
    <>
    {!response && <RefreshPage/>}
    {response && 
        <div className=''>
    <div className='flex items-center flex-col gap-7 border-b-2 p-7'>
    <h1 className='text-3xl font-bold text-yellow-500 text-center'>{response.data.coin.name} Price</h1>
    <h1 className='text-md'>{`${response.data.coin.name} live price in US dollars. View value statistics, market cap and supply.`}</h1>
    </div>
    <div>
    <select className="bg-gray-100 mx-auto sm:mx-0 p-1 border-2 border-gray-500 " onChange={(e)=>handleChange(e)}>
      <option value="24h">24h</option>
      <option value="1h">1h</option>
      <option value="3h">3h</option>
      <option value="12h">12h</option>
      <option value="24h">24h</option>
      <option value="7d">7d</option>
      <option value="30d">30d</option>
      <option value="1y">1y</option>
      <option value="3y">3y</option>
      <option value="5y">5y</option>
    </select>
    </div>
    <div>
  
        <HistoryChart id={id} day={day} name={response.data.coin.name}/>
        <Coininfo response={response}/>
        <div>
        </div>
    </div>
</div>
    }
  </>
  )
}

export default ParticularPage