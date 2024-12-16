
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import User from "./User";
import Commends from "./Commends";
import Problem from "./Problem";
import { Ground } from './Context';
import { useState } from 'react';
import Usecallback from "./Usecallback";
import { useCallback } from "react";


const App=()=> {
  const [center, setCenter] = useState([])// commets
  const [user, setUser] = useState([])//user
  const[calculate,setCalculate]=useState("")


  const fetchCall = (page) => {
    fetch(`https://jsonplaceholder.typicode.com/${page}`)
      .then(a => a.json())
      .then(arr => {
        if (page === "users") {
           setUser(arr) 
          } else {
          setCenter(arr)
        }

      })
  }
  return (
    <Ground.Provider value={{ fetchCall, user, center,calculate, setCalculate }}>
      <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/user" element={<User />} />
        <Route path="/commends" element={<Commends />} />
        <Route path="/Problem" element={<Problem />} />
        <Route path="/Usecallback" element={<Usecallback />} />
      </Routes>
    </BrowserRouter>
    </div>
    </Ground.Provider>
  );
}

export default App;
