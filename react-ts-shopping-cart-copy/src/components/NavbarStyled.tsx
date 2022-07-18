import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavbarS = styled.div`
  padding: 10px 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
export const NavBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  /* display: flex; */
  /* height: 100%; */
`;

export const NavItem = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  text-decoration: none;
  color: #878787;
  padding: 0 10px;
`;

export const IconWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 2rem;
cursor: pointer;
`

export const Icon = styled.svg`
height: 100%;
`;

export const Circle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 15px;
height: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: red;
  transform: translate(15%, 15%);
  border-radius: 50%;
`;
