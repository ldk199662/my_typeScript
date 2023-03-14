import styled from 'styled-components';

const Top = styled.div`
	background-color: black;
`;

const Mid = styled.div`
	background-color: black;
	width: 100%;
	height: 1000px;
`;
const MidBox = styled.div`
	background-color: white;
	border: 1px solid white;
	border-radius: 5%;
	width: 200px;
	height: 200px;
	margin: 10px;
`;

const Foot = styled.div`
	background-color: black;
	border: 1px solid white;
	border-radius: 5%;
	width: 200px;
	height: 200px;
	margin: 10px;
`;

const List = () => {
	return (
		<>
			<Top>0</Top>
			<Mid>
				<MidBox>List</MidBox>
			</Mid>
			<Foot>2</Foot>
		</>
	);
};
export default List;
