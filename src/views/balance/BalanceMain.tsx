import React from "react";
import { UserForm } from "../form/Form";
import { ToggleAccountActions } from "./toggle/ToggleAccountActions";

export const BalanceMain: React.FC = () => {
  return (
    <>
      <ToggleAccountActions />
      <UserForm />
    </>
  );
};
