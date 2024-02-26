import React from 'react';
import Title from '../../components/Title';
import Description from '../../components/Description';

import Styled from './styles';

const CompletedForm: React.FC = () => {
	return (
		<Styled.Div>
			<Title>Fale conosco!</Title>
      <Description>
        Muito obrigado, usuário!
        O seu número de protocolo é 012345, sua mensagem foi recebida  com sucesso, responderemos em breve.
      </Description>
		</Styled.Div>
	);
};

export default CompletedForm;
