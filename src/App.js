
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HeatmapExtract from './Heatmap/Heatmap2.0/HeatmapExtract';
import Navbar from './Heatmap/navbar';
import  Animation  from './Heatmap/Heatmap2.0/Animation';

function App() {
  return (
    <div className="App" >
       <Router>
      <Navbar/> 
    <Switch>
     <Route path ="/Home" exact component ={HeatmapExtract}/> 
     <Route path ="/Ball" exact component ={HeatmapExtract}/> 
     <Route path ="/TeamA" exact component ={HeatmapExtract}/> 
     <Route path ="/TeamB" exact component ={HeatmapExtract}/>
      </Switch>
      </Router>
        </div>

  );
}

export default App;
