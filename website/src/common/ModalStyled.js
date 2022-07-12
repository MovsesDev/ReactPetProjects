import styled from "styled-components";

export const ModalS = styled.div`
 display: flex;
    flex-direction: column;
 width: 100%;
    position: fixed;
    z-index: 1005;
    top: 0;
    bottom: 0;
    background-color: black;
    overflow: hidden;
    left: ${props => props.showModal ? '0' : '-100%'};
    transition: 0.75s ease;
`

export const Nav = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
`
export const NavItem = styled.button`
font-size: 32px;
color: white;
margin: 25px;
`