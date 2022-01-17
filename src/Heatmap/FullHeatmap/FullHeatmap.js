import React from 'react'
import detectObject from '../player-postions.json'
import h337 from 'heatmap.js';
import events from '../Events.json'
import ReactDOM from "react-dom";

  //Determine the HalfTime
 export const HalfTimeDetection =events.filter( timeFrame => [13,14].includes(timeFrame.eventType)).map( timeFrame => timeFrame.timestamp);
 
  //Tansform nano sec to sec
  export  const endOfFirstHalf = HalfTimeDetection[0]*1000000000 
  export  const startOfSecondHalf= HalfTimeDetection[1]*1000000000
  
  export  const mainFunction = (detectObject,filterFn) => {
    
  //remove last child to reduce overlapping of heatmaps
    const deleteNode = document.getElementById("root2");
    while (deleteNode.firstChild) {
    deleteNode.removeChild(deleteNode.lastChild);
    }
   
  //creates Heatmap
    const heatmapInstance = h337.create({    
    container: document.querySelector('#root2'),
    height: 960,
    width:1100,
    radius: 30,
    });
        
  //Detect the values of x and y axis
    const coords =  detectObject.filter(filterFn).map(ball => ({x:ball.top_view_position[0],y:ball.top_view_position[1] }) )
              
  //Number of appearances for each combination of  x & y asix
    const values = {}
      for (let data of coords) {
        if (!values[data.x+'-'+data.y])
        values[data.x+'-'+data.y] = 0
        values[data.x+'-'+data.y] =+1
        }

  //Detect the max value 
    const objectLenght = Object.keys(values).length
    const width =1000
    const height =600

  //Determining max value according to the number of data for each catagory 
    var max = (objectLenght>100000) ? 80 : ((objectLenght>10000) ? 50 : 20)
    let min =0

  // heatmap data format, contains values for x,y & value
    let elements = coords.map(elm => ({ x: Math.floor(elm.x*width), y: Math.floor(elm.y*height),value: 1}))
      
  //Initializes a heatmap instance with a dataset. "min", "max", and "data" properties are required.
    heatmapInstance.setData( {data:elements,min,max});
    heatmapInstance.onclick = () => {}  
    }

  //React Elements
   const FullHeatmap=()=> {
    
  return ( 
    <div className='clearfix'>
      <div className ="Button">
        <button id ='heatmapInstance' onClick = {() => 
          mainFunction(detectObject,   ()=> true)}>Click here </button>
      </div>
    </div>
         );
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(<FullHeatmap />, rootElement);
export default FullHeatmap