import React from "react";
import "./App.css";
import { Home } from "./views/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./views/navbar/Navbar";
import { FAQ } from "./views/faq/FAQ";
import { Contact } from "./views/contact/Contact";
import { Provider } from "react-redux";
import { MainController } from "./redux/MainController";

import { store } from "./redux/store";
import { BalanceMain } from "./views/balance/BalanceMain";

function App() {

  return (
    <Provider store={store}>
      <MainController />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/balance" element={<BalanceMain />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
