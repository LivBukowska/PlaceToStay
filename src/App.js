import React from "react";
import { render } from "react-dom";
import {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import {useParams} from 'react-router-dom';

const App = () => {


  return (
  
    <BrowserRouter>
        <Routes>
                <Route path="profile" element={<Profile />} />
                <Route path="/" exact element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
