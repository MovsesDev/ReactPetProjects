import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Sidebar from "./components/Sidebar";

function App() {
  return <div className="App"> 
  <BrowserRouter>
  <div className="main">

  <Sidebar />
  <Navigation/>
  </div>
  
  </BrowserRouter>
  </div>;
}

export default App;
