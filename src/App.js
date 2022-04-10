import React from "react";
import { render } from "react-dom";
import {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

const App = () => {


  return (
  
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
