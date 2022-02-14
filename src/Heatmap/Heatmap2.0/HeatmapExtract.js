import React from 'react';
import { HeatMap } from './Heatmap';
import {useState,useEffect} from 'react';
import events from '../Events.json'
import HeatmapProps from './HeatmapProps';
import { Scrollbars } from 'react-custom-scrollbars';
function HeatmapExtract({name,eventType,timestamp, rawData}) {
let [heatmapData, setHeatmapData] = useState(rawData)
let [count, setCount] = useState(0);
const handleToggle=()=>
{
    // setInterval(() => {
    //   setCount(state => state + 1);
    //   heatmapData =setHeatmapData()
    //   console.log()
    // }, 1000);
  
   return <HeatMap data={heatmapData} /> 
  }
  return ( <div className="clearfix">
          <div className="PlayButton">
          </div>
          <li className='list'>
          <Scrollbars style={{ width: 250, height:600, position: 'fixed' }}>
          {events.map ((evnt,key)=> {return <HeatmapProps onClick={setHeatmapData} key={key} name= {evnt.name} timestamp={evnt.timestamp} />})}
          </Scrollbars>
          </li> 
          <div className='heatmap'><HeatMap data={heatmapData}></HeatMap></div>
          <button className='playButton'  onClick ={ ()=>{{events.map ((evnt,key)=> {return <HeatmapProps onClick={setHeatmapData} key={key} name= {evnt.name} timestamp={evnt.timestamp} />})}}}>Play</button>
  </div>
  )
}

export default HeatmapExtract;
