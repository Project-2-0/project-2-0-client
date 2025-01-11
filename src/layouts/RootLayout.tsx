import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

const RootLayout = () => {
  return (
    <Container>
      <div>
					<Logo src={viteLogo} alt="vite logo" />
					<Logo src={reactLogo} alt="react logo" />
				</div>
				<Header>Project 2.0</Header>
      <Outlet />
    </Container>
  )
}

const Container = styled.div`
	text-align: center;
`;

const Logo = styled.img`
	height: 6rem;
	pointer-events: none;
`;

const Header = styled.h1`
	font-size: 2.5rem;
`;

export default RootLayout