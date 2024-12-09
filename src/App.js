
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import User from "./User";
import Commends from "./Commends";
import Problem from "./Problem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/user" element={<User />} />
        <Route path="/commends" element={<Commends />} />
        <Route path="/Problem" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
