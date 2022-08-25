import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 1rem;
`;
export const NavLink = styled(Link)`
  display: flex;
  padding: 0.5rem;
  font-size: 0.8rem;
  :hover {
    filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2));
  }
`;
