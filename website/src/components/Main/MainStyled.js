import styled from "styled-components";

export const MainS = styled.div`
color: white;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
export const Video = styled.video`
object-fit: cover;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`

export const H1 = styled.h1`
font-size: 130px;
`
export const H5 = styled.h5`
font-size: 60px;
`
export const Buttons = styled.div`
margin-top: 20px;
`
export const Button = styled.button`


color:  ${props => props.color === 'white' ? `black` : 'white' };
background: ${props => props.color === 'white' ? `white` : 'none' };
font-size: 22px;
margin: 10px;
outline: none;
border: 1px solid white;
padding: 8px 16px;
`
