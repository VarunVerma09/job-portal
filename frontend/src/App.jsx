import { Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Home from "./components/pages/Home"
import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"


function App() {
  
  return (
 
 
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/jobs" element={<Jobs/>}></Route>
    <Route path="/browse" element={<Browse/>}></Route>


    </Routes>
 

  )
}

export default App
