import React, { Dispatch, RefObject, SetStateAction, useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/outsikdeClick";
interface SignUpProps {
    setLocation: Dispatch<SetStateAction<boolean>>,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
  }

const Login: React.FC<SignUpProps> = ({ setLocation, setIsOpen }) => {
    const squareBoxRef = useRef<HTMLFormElement>(null);
useOnClickOutside(squareBoxRef,() => setIsOpen(false));
  return (
    <Form ref={squareBoxRef}>
      Sign in
      <Input placeholder="Email"></Input>
      <Input placeholder="Password"></Input>
      <LoginBtn>Log in</LoginBtn>
      <p>Dont have an account? <button style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '17px'}} onClick={() => setLocation(false)}>Sign up</button></p>
    </Form>
  );
};

export default Login;

const Form = styled.form`
  padding: 50px 25px;
  width: 20vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
border-radius: 5px; 
`;

const Input = styled.input`
  width: 80%;
  padding: 8px 4px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #2e7dd1;
  }
`;

const LoginBtn = styled.button `
    background: none;
    border: 0;
    color: white;
    background: black;
    padding: 8px 0;
    width: 80%;
    border-radius: 5px;
    margin: 15px;
    cursor: pointer;
`
