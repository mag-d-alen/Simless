import styled from "styled-components";

export const AccordionContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
`;

export const AccordionTitle = styled.h3`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionContent = styled.div<{
  active: boolean;
}>`
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  max-height: 0;
  max-height: ${({ active }) => (active ? "20rem" : 0)};
  display: flex;
  padding: ${({ active }) => (active ? "0 1rem 1rem 1rem" : "0 1rem ")};
  margin: 0;
  overflow: hidden;
  border-bottom: 0.03rem solid slategray;
`;
