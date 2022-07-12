import React, { useState } from "react";
import { Container } from "../../common/Container";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  HeaderS,
  Logo,
  NavItem,
  NavMenu,
  Nav,
  FA,
} from "./HeaderStyled";
import Modal from "../../common/Modal";

const Header = () => {
const [showModal, setShowModal] = useState(false)

  return (
    <HeaderS>
      <Modal showModal={showModal}/>
      <Container>
        <Nav>
          <Logo to="/">TRVL</Logo>
          <FA icon={faBars} onClick={() =>setShowModal(prev => !prev)}/>
          <NavMenu>
            <NavItem>Home</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Products</NavItem>
            <NavItem>Sign up</NavItem>
          </NavMenu>
        </Nav>
      </Container>
    </HeaderS>
  );
};

export default Header;
