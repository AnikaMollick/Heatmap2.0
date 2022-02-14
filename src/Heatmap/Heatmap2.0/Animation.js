import { Heatmap } from 'heatmap.js';
import React from 'react';
import { useState,useEffect } from 'react';
import useCustomHook from './CustomHook';

export const Animation = () => {
  const count=useCustomHook()
  const [heatmapData, setHeatmapData] = useState();
      useEffect(() => {
      const heatmapData =setHeatmapData(count)
          console.log(heatmapData)
        }, [count]);
       
     
    return <Heatmap data={heatmapData[count]}/>;
}

export default Animation