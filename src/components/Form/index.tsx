import { useState } from 'react';

import Styled from './styles';

import Title from '../Title';
import Description from '../Description';

export default function Form() {
	const [hasComplaint, setHasComplaint] = useState<string>('no');
	const [topic, setTopic] = useState<string>('default');
	const [reason, setReason] = useState<string>('default');

	return (
		<Styled.Form>
			<Title>Entre em contato conosco!</Title>
			<Description>Preencha as informações abaixo e em breve retornaremos sua solicitação!</Description>
			<label>Nome *</label>
			<input required={true} type="text" id="fname" placeholder="Digite seu nome" />
			<label>CPF *</label>
			<input required={true} type="cpf" id="fcpf" placeholder="Digite seu CPF" />
			<label>Telefone *</label>
			<input required={true} type="tel" id="ftelephone" placeholder="Digite seu telefone" />
			<label>Email *</label>
			<input required={true} type="email" id="femail" placeholder="Digite seu nome" />
			<label>Sua solicitação é referente a um pedido? *</label>
			<select value={hasComplaint} defaultValue={'default'} onChange={(e) => setHasComplaint(e.target.value)}>
				<option value="default">Selecione a solicitação</option>
				<option value={'yes'}>sim</option>
				<option value={'no'}>não</option>
			</select>
			{hasComplaint === 'no' ? (
				<></>
			) : (
				<>
					<label>Número do Pedido</label>

					<input type="number" id="frequest" placeholder="Digite o número do pedido" />
				</>
			)}

			<label>Assunto</label>
			<select value={topic} defaultValue={'default'} onChange={(e) => setTopic(e.target.value)}>
				<option value="default"> Selecione um assunto </option>
				<option value="information"> Informação </option>
				<option value="request"> Solicitação </option>
				<option value="complaint"> Reclamação </option>
				<option value="compliment"> Elogio </option>
			</select>

			<label>Motivo</label>
			<select value={reason} defaultValue={'default'} onChange={(e) => setReason(e.target.value)}>
				<option value="default"> Escolha um motivo </option>
				<option value="deliveryStatus"> Status na Entrega </option>
				<option value="website"> Site </option>
				<option value="financial"> Financeiro </option>
				<option value="store"> Loja </option>
				<option value="ombudsman"> Ouvidoria </option>
				<option value="problemsWithRecipes"> Problemas com Receitas </option>
				<option value="complaintWithMotoboy"> Reclamação do Motoboy </option>
				<option value="serviceComplaint"> Reclamação de Atendimento </option>
				<option value="buyAndWithDraw"> Compre e Retire </option>
				<option value="signature"> Assinatura </option>
				<option value="requestStatus"> Status do Pedido </option>
				<option value="refundStatus"> Status De Reembolso </option>
			</select>

			<label>Mensagem *</label>
			<input required={true} type="text" id="fmessage" placeholder="Descreva detalhadamente sua dúvida" />
			<Styled.Row>
				<label>* Campos de preenchimento obrigatório</label>
				<button type="submit">ENVIAR</button>
			</Styled.Row>
		</Styled.Form>
	);
}
