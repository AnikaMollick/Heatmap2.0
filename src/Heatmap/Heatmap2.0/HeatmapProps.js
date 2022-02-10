import React, { useEffect, useState } from 'react'
import playerPositions from '../player-postions.json';
import { filterData } from "./logic";
import { useHistory } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components';
import events from '../Events.json'
const HeatmapProps = ({name,timestamp,onClick}) => {
  let [filter,setFiletr]=useState()
const history = useHistory ()
let [active, setActive] = useState(name[0]);
const handleToggle= ()=>{
active=setActive({name})
console.log(active)
}
   useEffect(() => {
      return history.listen((location) => { 
     filter=setFiletr(`${location.pathname}`)
      }) 
   },[history]) 
   const eventTime_TenSecForawrd= (timestamp*1000000000)+10000000000
      const eventTime_TenSecBackawrd= (timestamp*1000000000)-10000000000
      const eventTime =  timestamp/60
      var hour = Math.floor(eventTime);
    var decpart = eventTime - hour;
    var min = 1 / 60;
    var Seconds= 1/ 3600
    decpart = min * Math.round(decpart / min);
    var minute = Math.floor(decpart * 60) + '';
    // Concate hours and minutes
    const time = hour + ':' + minute;

      const Fullheatmap = (detectedObject) => { return( detectedObject.timestamp_ns>eventTime_TenSecBackawrd && detectedObject.timestamp_ns <=eventTime_TenSecForawrd) }
     
     const ballEventFilter = (detectedObject) => {
         return(detectedObject.type === 'ball' && detectedObject.timestamp_ns>eventTime_TenSecBackawrd && detectedObject.timestamp_ns <=eventTime_TenSecForawrd )
     }
     
      const TeamAFilter =(detectedObject)=>{
        return(detectedObject.type === 'player' &&detectedObject.team==='0' && detectedObject.timestamp_ns>eventTime_TenSecBackawrd && detectedObject.timestamp_ns <=eventTime_TenSecForawrd )
      }
      
       const TeamBFilter =(detectedObject)=>{
       return(detectedObject.type === 'player' &&detectedObject.team==='1' && detectedObject.timestamp_ns>eventTime_TenSecBackawrd && detectedObject.timestamp_ns <=eventTime_TenSecForawrd )
       }
    return (
        <div className='Button'>
       
           {/* <ButtonToggle active={active === name} onClick = {() => {setActive(name); const newData = filterData(playerPositions, filter ==="/Home"? Fullheatmap:filter ==="/Ball"? ballEventFilter:filter ==="/TeamA"? TeamAFilter:TeamBFilter )
          onClick(newData)} } >{name}</ButtonToggle> */}
            <p className='active' 
           onClick = {() => { handleToggle(); const newData = filterData(playerPositions, filter ==="/Home"? Fullheatmap:filter ==="/Ball"? ballEventFilter:filter ==="/TeamA"? TeamAFilter:TeamBFilter )
          onClick(newData)}} >{name}</p>
        
              <p>{time}</p>

        </div>
    )
     
}
export default HeatmapProps