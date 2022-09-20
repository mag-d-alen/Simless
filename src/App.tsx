import React from "react";
import "./App.css";
import { Home } from "./views/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./views/navbar/Navbar";
import { FAQ } from "./views/faq/FAQ";
import { ContactMain } from "./views/contact/ContactMain";
import { Provider } from "react-redux";
import { PackageController } from "./views/PackagesController";
import { store } from "./redux/store";
import { BalanceMain } from "./views/balance/checkBalance/BalanceMain";


function App() {
  return (
    <Provider store={store}>
      <PackageController />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<ContactMain />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/balance" element={<BalanceMain />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
