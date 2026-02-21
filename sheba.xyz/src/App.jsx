import { Route, Routes } from "react-router"
import AuthProvider from "./context/Authprovider"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import NotFound from "./components/NotFound/NotFound";
import Services from "./pages/Services/Services";
import Staffs from "./pages/Staffs/Staffs";
function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Route>
      </Routes>
    </AuthProvider>
    
  )
}

export default App
