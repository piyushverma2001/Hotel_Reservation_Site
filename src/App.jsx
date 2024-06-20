import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import SingleRoom from "./pages/SingleRoom.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms/" element={<Rooms/>} />
        <Route path="/rooms/:slug" element={<SingleRoom/>} />
        <Route element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
