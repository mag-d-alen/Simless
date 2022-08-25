import styled from "styled-components";
export const IFrame = styled.iframe`
  background-color: white;
  border: none;
  width: 100%;
  border-radius: 0.3rem;
  max-height: 80%;
  overflow: auto;
`;
export const DialogContainer = styled.div<{ show: boolean }>`
  z-index: auto;
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: none;
  margin: 1rem;
  align-self: flex-end;
`;
