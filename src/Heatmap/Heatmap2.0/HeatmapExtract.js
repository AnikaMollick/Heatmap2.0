import React from 'react';
import { HeatMap } from './Heatmap';
import {useState} from 'react';
import events from '../Events.json'
import HeatmapProps from './HeatmapProps';
// import {Animation} from './Animation'
import { useParams } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactPlayer from 'react-player'
function HeatmapExtract({name,eventType,timestamp, rawData}) {
const [heatmapData, setHeatmapData] = useState(rawData)


  return ( <div className="clearfix">
          <div className="PlayButton">
          </div>
          <li className='list'>
          <Scrollbars style={{ width: 250, height:600, position: 'fixed' }}>
          {events.map ((evnt,key)=> {return <HeatmapProps onClick={setHeatmapData} key={key} name= {evnt.name} timestamp={evnt.timestamp} />})}
          </Scrollbars>
          </li> 
          <div className='heatmap'><HeatMap data={heatmapData}></HeatMap></div>
          {/* <button className='playButton'  onClick = {() => { Animation()}}>Play</button> */}
  </div>
  )
}

export default HeatmapExtract;
