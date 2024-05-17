import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export function Form() {
	const [messageSentSuccessfully, setMessageSentSuccessfully] =
		useState<boolean>(false);
	const [messageSentError, setMessageSentError] = useState<boolean>(false);

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (form.current) {
			emailjs
				.sendForm("service_mzd1trg", "template_w7aogd8", form.current, {
					publicKey: "-58nUPmluZEa4yYMw",
				})
				.then(
					() => {
						console.log("SUCCESS!");
						setMessageSentSuccessfully(true);
                        setMessageSentError(false);
						e.target.reset();
					},
					(error) => {
						console.log("FAILED...", error.text);
						setMessageSentSuccessfully(false);
						setMessageSentError(true);
					}
				);
		}
	};

	return (
		<FormStyle ref={form} onSubmit={sendEmail}>
			<Lable>
				Имя*
				<Input name="from_name" type="text" placeholder="Ваше Имя" required />
			</Lable>
			<Lable>
				Email*
				<Input name="email" type="text" placeholder="Email" required />
			</Lable>
			<Lable>
				Сообщение
				<textarea name="message" placeholder="Ваше Сообщение" />
			</Lable>
			<Button type="submit">Отправить</Button>

			{messageSentSuccessfully ? (
				<SendMessage messageSentSuccessfully={messageSentSuccessfully}>
					Сообщение отправленно успешно
				</SendMessage>
			) : (
				""
			)}

			{messageSentError ? (
				<SendMessage messageSentSuccessfully={messageSentSuccessfully}>
					Сообщение не отправленно, попробуйте позже
				</SendMessage>
			) : (
				""
			)}
		</FormStyle>
	);
}

const FormStyle = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	align-self: center;
	width: 100%;
	max-width: 1000px;

	& textarea {
		font-size: 1.5rem;
		width: 100%;
		height: 15rem;
		padding: 10px;
		background-color: #bbbbbb;
		border: 1px solid #807d7d;
	}
`;

const Lable = styled.label`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0.75rem;
	width: 100%;
`;
const Input = styled.input`
	font-size: 1.5rem;
	width: 100%;
	padding: 10px;
	background-color: #bbbbbb;
	border: 1px solid #807d7d;

	@media (hover: hover) {
		&:hover,
		:focus {
			background-color: #c7c7c7;
		}
	}

	@media (hover: none) {
		&:active,
		:focus {
			background-color: #c7c7c7;
		}
	}
`;

const Button = styled.button`
	font-size: 1.2rem;
	padding: 0.75rem 1rem;
	background-color: transparent;
	border-radius: 10px;
	align-self: flex-end;
	cursor: pointer;
`;

const SendMessage = styled.div<{ messageSentSuccessfully: boolean }>`
	position: absolute;
	left: 0;
	bottom: 0;
	font-size: 1.5rem;

	color: ${(props) => (props.messageSentSuccessfully ? "#616161" : "#f94848")};
	max-width: 45rem;

	@media (max-width: 768px) {
		font-size: 1rem;
		max-width: 29rem;
	}

	@media (max-width: 768px) {
		max-width: 17rem;
	}
`;
