import React, { useState } from 'react';
import styled from 'styled-components';
export interface Iprops {
	isHovered: boolean;
}

const MainScreenContainer = styled.div`
	height: 100vh;
	background-size: cover;
	background-color: black;
	filter: brightness(50%);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const Heading = styled.h1`
	font-size: 3rem;
	margin-bottom: 2rem;
	color: white;
`;

const Button = styled.button`
	padding: 1rem 2rem;
	font-size: 1.2rem;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	background-color: ${(props: any) => (props.isHovered ? '#4CAF50' : 'white')};
	color: ${(props: any) => (props.isHovered ? 'white' : 'black')};
	&:hover {
		background-color: #4caf50;
		color: white;
	}
`;

function Main() {
	const [isHovered, setIsHovered] = useState<Iprops['isHovered']>(false);

	function handleButtonHover() {
		setIsHovered(true);
	}

	function handleButtonLeave() {
		setIsHovered(false);
	}

	return (
		<MainScreenContainer>
			<ContentContainer>
				<Heading>Welcome to the Main Screen</Heading>
				<Button
					onMouseEnter={handleButtonHover}
					onMouseLeave={handleButtonLeave}>
					{isHovered ? 'Click me!' : 'Hover over me!'}
				</Button>
			</ContentContainer>
		</MainScreenContainer>
	);
}

export default Main;
