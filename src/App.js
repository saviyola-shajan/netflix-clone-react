import React from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {orignals,action} from './Urls'


function App() {
return(
  <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={orignals} title='NetflixOrignals'/>
    <RowPost url={action} title='Action' isSmall/>
  </div>
)
}

export default App;
