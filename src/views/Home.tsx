import React from "react";
import { ChooseTariff } from "./chooseTariff/ChooseTariff";
import { UserForm } from "./form/Form";
import { Navbar } from "./navbar/Navbar";

export const Home: React.FC = () => {
  return (
    <div>
      Home
      <ChooseTariff />
      <UserForm />
    </div>
  );
};
