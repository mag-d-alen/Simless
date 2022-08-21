import React from "react";
import "./App.css";
import { ChooseTariff } from "./views/chooseTariff/ChooseTariff";
import { Home } from "./views/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./views/navbar/Navbar";
import { FAQ } from "./views/faq/FAQ";
import { Contact } from "./views/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
      </Routes>
    </>
  );
}

export default App;
