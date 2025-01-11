import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function Main() {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [chats, setChats] = useState([]);

	useEffect(() => {
		const fetchChats = async () => {
			const data = await GetChats();
			setChats(data);
		};
		if (loggedIn) {
			fetchChats();
		}
	}, [loggedIn]);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const response = await fetch(API_URL + "/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
		credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		if (response.ok){
			setLoggedIn(true);
		} else {
			alert("Login failed");
		}
	}

	const handleLogout = () => {
		setLoggedIn(false);
		//TODO: Remove token from cookies
	}

	function notLoggedInState() {
		return (
			<Container>
				<div>
					<Logo src={viteLogo} alt="vite logo" />
					<Logo src={reactLogo} alt="react logo" />
				</div>
				<Header>Project 2.0</Header>
				<Card>
					<p>
						Welcome to Project 2.0! Please log in.
					</p>
					<form onSubmit={handleSubmit}>
						<input type="text" 
						placeholder="Username" 
						value={username} 
						onChange={(e) => setUsername(e.target.value)} 
						/>
						<input 
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						/>
						<br></br>
						<button type="submit">Log in</button>
					</form>
				</Card>
			</Container>
		);
	}

	function loggedInState() {
		return (
			<Container>
				<div>
					<Logo src={viteLogo} alt="vite logo" />
					<Logo src={reactLogo} alt="react logo" />
				</div>
				<Header>Project 2.0</Header>
				<Card>
					<p>
						You are logged in!
					</p>
					<Button onClick={handleLogout}>Log out</Button>
				</Card>
				<Card>
					<p>
						Chats:
					</p>
					<ul>
						{chats.map((chat) => (
							<li key={chat.id}>
								<Link to={`/chat?id=${chat.id}`}>{chat.name}</Link>
							</li>
						))}
					</ul>
				</Card>
			</Container>
		);
	}

	async function GetChats() {
		const response = await fetch(API_URL + "/chats", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		if(response.ok) {
			const data = await response.json();
			return data;
		} else {
			return [];
		}
	}

	return (
		<>
			{loggedIn ? loggedInState() : notLoggedInState()}
		</>
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

export default Main;
