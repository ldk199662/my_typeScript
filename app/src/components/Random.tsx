import styled from 'styled-components';

const TopWrap = styled.div`
	width: 100%;
	height: 150px;
	background-color: black;
`;
const MiddleWrap = styled.div`
	background-color: black;
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
	background-color: whitesmoke;
	border: 1px solid white;
	border-radius: 5%;
`;

const Random = () => {
	return (
		<>
			<TopWrap>1</TopWrap>
			<MiddleWrap>
				<RandomBoxWrap>
					<RandomBox>Random List</RandomBox>
				</RandomBoxWrap>
			</MiddleWrap>
		</>
	);
};
export default Random;
