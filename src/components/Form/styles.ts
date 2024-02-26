import { styled } from 'styled-components';

const Form = styled.div`
	display: grid;
	flex-direction: column;
	gap: 3%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 50px;
`;

const ButtonLink = styled.button`
	padding: 8px;
`;

export default { Form, Row, ButtonLink };
