import React from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Authpage from './component/loginpages/Authpage'
import Register from './component/loginpages/Register'

function App() {
  return (
  
  <div>
    <BrowserRouter>

    
     <Routes>
                    <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contacts" element={<Contact/>}></Route>
            <Route path="/sign" element={<Authpage/>}></Route>
            <Route path="/register" element={<Register/>}></Route>

     </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App