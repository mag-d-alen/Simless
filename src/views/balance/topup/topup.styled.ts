import styled from "styled-components";

export const BalanceMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressContainer = styled.div`
  display: flex;
  height: 1.5rem;
  background-color: aliceblue;
  border-radius: 0.3rem;
  width: 50%;
`;
export const ProgressZipper = styled.div<{ step: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ step }) => `${step}%`};
  height: 0.9rem;
  background-color: #483d8b61;
  border-radius: 0.3rem;
  color: white;
  padding: 0.3rem;
  font-size: 0.5rem;
  text-transform: uppercase;
`;
export const TopupTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  color: white;
  height: 80%;
  width: 80%;
`;
