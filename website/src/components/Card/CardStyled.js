import styled from "styled-components";

export const CardS = styled.div`
width: 42%;
max-height: 500px;
overflow: hidden;
border: 1px solid white;
border-radius: 20px;
display: flex;
flex-direction: column;
box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.3);
text-align: center;
margin: 10px;
cursor: pointer;
transition: 0.4s ease;
&:hover {
    transform: scale(1.05);
}
`

export const Image = styled.img`
border-top-left-radius: 20px;
border-top-right-radius: 20px;
width: 100%;
height: 80%;
`

export const Text = styled.p`
padding-top: 20px;
color: black;
font-size: 19px;
`