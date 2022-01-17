import { useState, useEffect } from 'react';
import h337 from 'heatmap.js';

export function HeatMap({ data }) {

const [h337Instance, seth337Instance] = useState()

useEffect(() => {
  seth337Instance = h337.create({ container: document.querySelector('root2'), height: 960, width: 1100 });
  const deleteNode = document.getElementById("root2");
  while (deleteNode.firstChild) {
  deleteNode.removeChild(deleteNode.lastChild);
  }
}, []);

useEffect(() => {
  h337Instance.setData(data);
}, [data])

return <div style={{width: 1100, height:  960}} container={h337Instance}></div>;
}