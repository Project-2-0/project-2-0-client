import { useState } from "react";
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

  &.react {
    animation: react-logo-spin infinite 20s linear;
  }

  @keyframes react-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Header = styled.h1`
  font-size: 4rem;
`;

const Card = styled.div`
  padding: 2rem;
`;

const Button = styled.button`
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const ReadTheDocs = styled.p`
  font-size: 1.25rem;
  color: #888;
`;

export default App;
