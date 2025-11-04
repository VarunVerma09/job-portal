import { Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Home from "./components/pages/Home"


function App() {
  
  return (
 
 
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
 

  )
}

export default App
