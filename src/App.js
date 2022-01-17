
import './App.css';
import {BrowserRouter as Router, Route, Switch} from"react-router-dom"
import FullHeatmap from './Heatmap/FullHeatmap/FullHeatmap';
import Navbar from './Heatmap/navbar';
import Catagories from './Heatmap/Catagories';
import { HeatMap } from './Heatmap2.0/Heatmap';
import {useState} from 'react';
import playerPositions from './Heatmap/player-postions.json';
import { filterData, ball1stHalfFilter, ball2ndHalfFilter } from "./Heatmap2.0/logic";

function App() {
 // const [heatmapData, setHeatmapData] = useState();

  return (
    //Heatmap2.0
  //  <div className="App" >
  //     <h1>Heatmap Player Position</h1>
  //     <div className="clearfix">
  //       <div className="Button">
  //         <button
  //           onClick={() => {
  //             const newData = filterData(playerPositions, ball1stHalfFilter);
  //             setHeatmapData(newData);
  //           }}
  //         >
  //           Ball 1st half 
  //         </button>
  //       </div>

  //       <div className="Button">
  //         <button
  //           onClick={() => {
  //             const newData = filterData(playerPositions, ball2ndHalfFilter);
  //             setHeatmapData(newData);
  //           }}
  //         >
  //           Ball 2nd half 
  //         </button>
  //       </div>
  //     </div>

  //     <HeatMap data={heatmapData}></HeatMap>
  //     </div>
//Heatmap
  <div className="App">
     <h1>Heatmap Player Position</h1>
     <Router>
       <Navbar/>
     <Switch>
      <Route path ="/" exact component={FullHeatmap}/>
      <Route path ="/Catagories" exact component={Catagories}/>
    
    </Switch>
     </Router>
    </div> 
  );
}

export default App;
