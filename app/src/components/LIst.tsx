import styled from 'styled-components';

const Top = styled.div`
	background-color: black;
`;

const Mid = styled.div`
	background-color: blue;
`;

const Foot = styled.div`
	background-color: pink;
`;

const List = () => {
	return (
		<>
			<Top>0</Top>
			<Mid>1</Mid>
			<Foot>2</Foot>
		</>
	);
};
export default List;
