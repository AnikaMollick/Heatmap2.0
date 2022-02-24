import { useState,useRef ,useEffect } from 'react';
import h337 from 'heatmap.js';

export function HeatMap({ data: heatmapData, isStatic, startTime, endTime, onPlayingFinished }) {
  const containerRef = useRef();
  const h337InstanceRef = useRef();

  useEffect(() => {
    h337InstanceRef.current = h337.create({ container: containerRef.current, height: 960, width: 1100 });
    const deleteNode = document.getElementById('root2');
    while (deleteNode.firstChild) {
      deleteNode.removeChild(deleteNode.lastChild);
    }
  }, []);

  useEffect(() => {
    if (!heatmapData) {
      return;
    }
    h337InstanceRef.current.setData(heatmapData);
  }, [heatmapData]);

  useEffect(() => {
    if (!heatmapData) {
      return;
    }

    if (isStatic) {
      h337InstanceRef.current.setData(heatmapData);
      return;
    }

    let playTime = startTime;
    const playStep = 1000000000;

    const interval = setInterval(() => {
      const dataShouldBeShow = heatmapData.data.filter(point => {
        return point.timestamp >= playTime-playStep && point.timestamp < playTime + playStep;
      })

      h337InstanceRef.current.setData({
        data: dataShouldBeShow ?? [],
        min: heatmapData.min,
        max: heatmapData.max
      });

      playTime += playStep;

      if (playTime > endTime) {
        onPlayingFinished()
        clearInterval(interval);
      }
     
    }, 1000);


    return () => {
      clearInterval(interval);
    }
  }, [isStatic, heatmapData, startTime, endTime])

  return <div style={{ width: 300, height: 400, position: 'fixed' }} ref={containerRef}></div>;
}