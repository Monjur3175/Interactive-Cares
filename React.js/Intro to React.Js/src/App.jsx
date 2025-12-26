import { Routes,Route } from "react-router-dom";
import './App.css';
import Home from "./pages/homepage/home";
import Services from "./pages/services/services";
import Teams from "./pages/teams/teams";
import Leagues from "./pages/leagues/leagues";
import Contact from "./pages/contact/contact";
function App() {
  
  return (
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/services' element= {<Services />}/>
      <Route path='/teams' element= {<Teams />}/>
      <Route path='/leagues' element= {<Leagues />}/>
      <Route path='/contact' element= {<Contact />}/>
    </Routes>
  )
}

export default App;
