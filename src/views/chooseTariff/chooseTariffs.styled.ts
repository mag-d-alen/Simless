import styled from "styled-components";

export const ChooseTariffContainer = styled.div`
  display: flex;
  padding: 2rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TariffSelectContainer = styled.div`
  display: inline-block;
  flex: 1;
`;

export const Button = styled.button`
margin:auto;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: none;
  text-transform: uppercase;
  color: darkgray;
  :hover {
    filter: drop-shadow(0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.1));
    color: darkblue;
  }
`;
