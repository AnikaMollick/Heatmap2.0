import { useState,useRef ,useEffect } from 'react';
import h337 from 'heatmap.js';

  export function HeatMap({ data }) {
    const containerRef = useRef();
    const h337InstanceRef = useRef();
  
    useEffect(() => {
      h337InstanceRef.current = h337.create({ container: containerRef.current, height: 960, width: 1100 });
      const deleteNode = document.getElementById("root2");
      while (deleteNode.firstChild) {
        deleteNode.removeChild(deleteNode.lastChild)}
    }, []);
  
    useEffect(() => {
      if (!data) {
        return
      }
      h337InstanceRef.current.setData(data);
    }, [data])
  
    return <div style={{width: 300, height: 400,position: 'fixed'}} ref={containerRef}></div>;
  }