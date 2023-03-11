import styled from 'styled-components';

const Top = styled.div`
	background-color: black;
`;

const Mid = styled.div`
	background-color: blue;
`;
const MidBox = styled.div`
	padding: 10px;
	margin: 10px;
`;

const Foot = styled.div`
	background-color: pink;
`;

const List = () => {
	return (
		<>
			<Top>0</Top>
			<Mid>
				<MidBox>1</MidBox>
			</Mid>
			<Foot>2</Foot>
		</>
	);
};
export default List;
