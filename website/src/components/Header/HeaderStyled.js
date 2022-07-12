import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const HeaderS = styled.div`
background-color: black;
color: white;
font-size: 20px;
position: sticky;
z-index: 15;
left: 0;
right: 0;
`
export const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Logo = styled(Link)`
text-decoration: none;
    font-size: 20px;
    color: white;
`

export const NavMenu = styled.ul`
width: 30%;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 1045px) {
    display: none;
}
`

export const NavItem = styled.li`
text-decoration: none;
cursor: pointer;
&:hover {
    transform: scale(1.1);
}
`

export const FA = styled(FontAwesomeIcon)`
    font-size: 32px;
    display: none;
    @media (max-width: 1045px) {
    display: block;
}
`

