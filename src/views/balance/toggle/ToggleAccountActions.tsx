import React, { useState } from "react";
import { ToggleContainer, ToggleLabel } from "./toggle.styled";
import { CheckBalance } from "../CheckBalance";
import { ToggleBalance } from "./ToggleBalance";
import { TopUpBalance } from "../TopUpBalance";

export const ToggleAccountActions = () => {
  const [isCheckOn, setIsCheckOn] = useState(true);
  const handleToggle = () => {
    setIsCheckOn(!isCheckOn);
  };
  return (
    <>
      <ToggleContainer onClick={handleToggle}>
        <ToggleLabel active={isCheckOn}>Check balance</ToggleLabel>
        <ToggleBalance right={!isCheckOn} />
        <ToggleLabel active={!isCheckOn}>top up your account</ToggleLabel>
          </ToggleContainer>
      
              {isCheckOn ? <CheckBalance /> : <TopUpBalance />}
              
    </>
  );
};
