import React from "react";
import styled from "styled-components";
import Button from "./button";

const HeaderWrapper = styled.header`
height: 20%;
width: 100%;
background-color:blue;
 
 
`;
const Nav = styled.nav`
  display: flex;
  height: 100%;
  gap: ${(props) => props.theme.spacing.sm};
  @media (max-width:${(props)=>props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Button text={"pasa"}/>
        <Button text={"hola"}/>
        <Button text={"hola"}/>
        <Button text={"hola"}/>
        <Button text={"hola"}/>
      </Nav>
      <AuthButtons></AuthButtons>
    </HeaderWrapper>
  );
};

export default Header;
