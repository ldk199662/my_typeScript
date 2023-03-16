import styled from 'styled-components';

const TopWrap = styled.div`
	height: 10vh;
	background-color: #282626;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MiddleWrap = styled.div`
	height: 100vh;
	background-color: black;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RandomBoxWrap = styled.div`
	height: 500px;
	width: 500px;
	margin-top: 100px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	background-color: #171717;
	border: 1px solid white;
	border-radius: 5%;
`;

const RandomBox = styled.div`
	padding: 20px;
	margin: 28px;
	height: 400px;
	width: 400px;
	background-color: white;
	border: 1px solid white;
	border-radius: 5%;
`;

const Random = () => {
	return (
		<>
			<TopWrap></TopWrap>
			<MiddleWrap>
				<RandomBoxWrap>
					<RandomBox>Random List</RandomBox>
				</RandomBoxWrap>
			</MiddleWrap>
		</>
	);
};
export default Random;
