import React, { useState } from "react";
import "./App.css";
import { ChooseTariff } from "./views/chooseTariff/ChooseTariff";
import { Home } from "./views/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./views/navbar/Navbar";
import { FAQ } from "./views/faq/FAQ";
import { Contact } from "./views/contact/Contact";
import { Provider } from "react-redux";
import { MainController } from "./context/MainController";
import { SelectedCountryType } from "./data/types";
import { store } from "./context/store";

function App() {
  const [selectedCountries, setSelectedCountries] = useState<
    SelectedCountryType | undefined
  >();
  return (
    <Provider store={store}>
      <MainController />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
