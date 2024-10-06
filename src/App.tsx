import { useState } from "react";
import React from "react";
import styled from "styled-components";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Container>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<Logo src={viteLogo} alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<Logo src={reactLogo} className="react" alt="React logo" />
				</a>
			</div>
			<Header>Vite + React</Header>
			<Card>
				<Button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</Card>
			<ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
		</Container>
	);
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

const Card = styled.div`
	margin: 2rem;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
	font-size: 1.5rem;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: #f0f0f0;
	cursor: pointer;
`;

const ReadTheDocs = styled.p`
	font-size: 0.75rem;
`;

export default App;
