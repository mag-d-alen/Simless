import React from "react";

import { ToggleButton, ToggleZip } from "./toggle.styled";

export const ToggleBalance: React.FC<{
  right: boolean;
}> = ({ right }) => {
  return (
    <ToggleButton right={right}>
      <ToggleZip right={right}></ToggleZip>
    </ToggleButton>
  );
};
