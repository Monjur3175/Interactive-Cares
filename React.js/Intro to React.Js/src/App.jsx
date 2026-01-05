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
      <Route path='/leagues' element= {<Home />}/>
      <Route path='/leagues/:name' element= {<Leagues />}/>
      <Route path='/leagues/:name/:team' element= {<Teams />}/>
      <Route path='/services' element= {<Services />}/>
      <Route path='/contact' element= {<Contact />}/>
    </Routes>
  )
}

export default App;

