import  Cardlogin  from "./components/cards/logincard";
import  Cardsignup  from "./components/cards/signupcard";
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/homepage";
function App(){

  return (
    <>  
    <Router>
    <Routes>
        <Route path={"/signin"} element={<Cardlogin />} />
        <Route path={"/signup"} element={<Cardsignup />} />
        <Route path={"/homepage"} element={<Homepage />} />

    </Routes>
</Router>
    </>
  )
}

export default App
