import styled from 'styled-components';

const RandomBoxWrap = styled.div`
	height: 500px;
	width: 500px;
	background-color: #171717;
	border: 1px solid white;
	border-radius: 5%;
`;

const RandomBox = styled.div`
	padding: 20px;
	margin: 20px;
	height: 400px;
	width: 400px;
	background-color: whitesmoke;
	border: 1px solid white;
`;

const Random = () => {
	return (
		<>
			<RandomBoxWrap>
				<RandomBox>Random List</RandomBox>
			</RandomBoxWrap>
		</>
	);
};
export default Random;
