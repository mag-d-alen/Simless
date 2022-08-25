import React from "react";
import { useSelector } from "react-redux";

export const DisplayBalance: React.FC = () => {
  const userSimNumber  = useSelector((s: any) => s.userInfo.userSimNumber);
  return <>{userSimNumber ? <div>sim number: {userSimNumber}</div> : null}</>;
};
