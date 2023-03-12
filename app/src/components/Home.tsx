import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	background-color: black;
`;
const MainWrap = styled.section`
	display: flex;
	flex: 1;
	position: relative;
	padding: 112px 0 0 0;
	width: calc(100% - 200px);
	.container {
		width: 100%;
		max-width: 1040px;
		padding: 0 32px;
		margin: 48px auto 48px auto;
	}
`;
const Home = () => {
	const navigate = useNavigate();

	const navigateRandom = () => {
		navigate('/random');
	};

	return (
		<>
			<Wrap>
				<MainWrap>1</MainWrap>
			</Wrap>
			<button onClick={navigateRandom}>Random</button>
		</>
	);
};
export default Home;
