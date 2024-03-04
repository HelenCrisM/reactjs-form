import { useState } from 'react';

import Styled from './styles';

import Title from '../Title';
import Description from '../Description';

import validateForm from '../../utils/validateForm';
import { useNavigate } from 'react-router-dom';

export default function Form() {
	const [hasComplaint, setHasComplaint] = useState<string>('default');
	const [topic, setTopic] = useState<string>('default');
	const [reason, setReason] = useState<string>('default');
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [CPF, setCPF] = useState<string>('');
	const [telephone, setTelephone] = useState<string>('');
	const [messageDescription, setMessageDescription] = useState<string>('');

	const navigate = useNavigate();

	return (
		<>
			<Styled.Form>
				<Title>Entre em contato conosco!</Title>
				<Description>Preencha as informações abaixo e em breve retornaremos sua solicitação!</Description>
				<label>Nome *</label>
				<input
					required={true}
					type="text"
					id="fname"
					placeholder="Digite seu nome"
					onChange={(e) => setName(e.target.value)}
				/>
				<label>CPF *</label>
				<input
					required={true}
					type="cpf"
					id="fcpf"
					placeholder="Digite seu CPF"
					onChange={(e) => setCPF(e.target.value)}
				/>
				<label>Telefone *</label>
				<input
					required={true}
					type="tel"
					id="ftelephone"
					placeholder="Digite seu telefone"
					onChange={(e) => setTelephone(e.target.value)}
				/>
				<label>Email *</label>
				<input
					required={true}
					type="email"
					id="femail"
					placeholder="Digite seu email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Sua solicitação é referente a um pedido? *</label>
				<select value={hasComplaint} onChange={(e) => setHasComplaint(e.target.value)}>
					<option value="default">Selecione a solicitação</option>
					<option value={'yes'}>sim</option>
					<option value={'no'}>não</option>
				</select>
				{hasComplaint === 'yes' ? (
					<>
						<label>Número do Pedido</label>

						<input type="number" id="frequest" placeholder="Digite o número do pedido" />
					</>
				) : (
					<></>
				)}

				<label>Assunto</label>
				<select value={topic} onChange={(e) => setTopic(e.target.value)}>
					<option value="default"> Selecione um assunto </option>
					<option value="information"> Informação </option>
					<option value="request"> Solicitação </option>
					<option value="complaint"> Reclamação </option>
					<option value="compliment"> Elogio </option>
				</select>

				<label>Motivo</label>
				<select value={reason} onChange={(e) => setReason(e.target.value)}>
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
				<input
					required={true}
					type="text"
					id="fmessage"
					placeholder="Descreva detalhadamente sua dúvida"
					onChange={(e) => setMessageDescription(e.target.value)}
				/>
				<Styled.Row>
					<label>* Campos de preenchimento obrigatório</label>
					<Styled.ButtonLink
						type="submit"
						onClick={() => validateForm(name, email, CPF, telephone, topic, reason, messageDescription, navigate)}
					>
						ENVIAR
					</Styled.ButtonLink>
				</Styled.Row>
			</Styled.Form>
		</>
	);
}
