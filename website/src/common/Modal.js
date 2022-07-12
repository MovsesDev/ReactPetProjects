import React from 'react'
import { ModalS, Nav, NavItem } from './ModalStyled'

const Modal = ({showModal}) => {
  return (
    <ModalS showModal={showModal}>
        <Nav>
            <NavItem>Login</NavItem>
            <NavItem>Login</NavItem>
            <NavItem>Login</NavItem>
            <NavItem>Login</NavItem>
        </Nav>
    </ModalS>
  )
}

export default Modal