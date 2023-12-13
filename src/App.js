import React, { useState } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import mockDogs from "./mockDogs";

import './App.css';

const App = () => {
  const [dogs, setDogs] = useState(mockDogs);

  const createDog = (dog) => {
    console.log("created dog:", dog);
  };

  const updateDog = (dog, id) => {
    console.log("dog:",dog)
    console.log("id:",id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogedit/:id" element={<DogEdit dogs={dogs} updateDog={updateDog} />} />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dognew" element={<DogNew createDog={createDog} />} />
        <Route path="/dogshow/:id" element={<DogShow dogs={dogs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;


 













