import React, { useEffect, useState } from 'react';
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
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    readDog()
  }, [])

  const readDog = () => {
    fetch("http://localhost:3000/dogs")
    .then((response) => response.json())
    .then((payload) => {
      setDogs(payload)
    })
    .catch((errors) => console.log("Dogs read errors: ", errors))
  }

  const createDog = (createDog) => {
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(createDog),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    .then((response) => response.json())
    .then(() => readDog())
    .catch((errors) => console.log('Dog create errors:', errors))
  };


  const updateDog = (updateDog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      body: JSON.stringify(updateDog),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
    .then((response) => response.json())
    .then(() => readDog())
    .catch((errors) => console.log('Update Dog errors:', errors))
  };

  const deleteDog = (id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => readDog())
    .catch((errors) => console.log('Delete Dog errors:', errors))
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogedit/:id" element={<DogEdit dogs={dogs} updateDog={updateDog} />} />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dognew" element={<DogNew createDog={createDog} />} />
        <Route path="/dogshow/:id" element={<DogShow dogs={dogs} deleteDog={deleteDog} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;













