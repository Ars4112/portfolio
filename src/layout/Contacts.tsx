import styled from "styled-components";
import { MainInscription } from "../components/MainInscription";
import { Container } from "../components/Container";
import { SpanHidden } from "../components/SpanHidden";
import mobile from "../assets/img/svg/mobile.svg";
import telegram from "../assets/img/svg/telegram.svg";
import letter from "../assets/img/svg/letter.svg";
import github from "../assets/img/svg/github.svg";
import { Fade } from "react-awesome-reveal";
import { Form } from "./Form";

export function Contacts() {
	return (
		<Section id="contacts">
			<ContactsContainer>
				<Fade direction="up" triggerOnce>
					<h2>
						<MainInscription>
							<span>СВЯЗАТЬСЯ</span> СО&nbsp;МНОЙ
						</MainInscription>
					</h2>
				</Fade>
				<Fade delay={700} triggerOnce>
					<List>
						<ListItem aria-label="по телефону">
							<a href="tel: +79253647813">
								<SpanHidden>Телефон</SpanHidden>+ 7 (952) 245-49-49
							</a>
						</ListItem>
						<ListItem aria-label="в телеграме">
							<a href="##" target="blank">
								<SpanHidden>Телеграм</SpanHidden>
								@Ars4112
							</a>
						</ListItem>
						<ListItem aria-label="по электронной почте">
							<a href="mailto: ars4112@gmail.com">
								<SpanHidden>Электронная почта</SpanHidden>
								ars4112@gmail.com
							</a>
						</ListItem>
						<ListItem aria-label="гитхаб">
							<a href="https://github.com/Ars4112" target="blank">
								<SpanHidden>Гитхаб</SpanHidden>
								Ars4112
							</a>
						</ListItem>
					</List>
				</Fade>
				<Form/>
			</ContactsContainer>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;
	padding: min(75px, calc(50px + 25 * (100vw - 768px) / 672)) 0;
`;

const ContactsContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: min(64px, calc(40px + 24 * (100vw - 768px) / 672));

	& h2 {
		text-align: start;
	}
`;

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;

	@media (max-width: 375px) {
		flex-direction: column;
	}
`;

const ListItem = styled.li`
	& a {
		font-weight: 600;
		font-size: 18px;
		line-height: 150%;
		padding: 5px 5px 5px 45px;
		position: relative;
	}

	&:nth-child(1) a::before {
		content: "";
		background-image: url(${mobile});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;
		width: 26px;
		height: 26px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	&:nth-child(2) a::before {
		content: "";
		background-image: url(${telegram});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;
		width: 26px;
		height: 26px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	&:nth-child(3) a::before {
		content: "";
		background-image: url(${letter});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;
		width: 26px;
		height: 26px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	&:nth-child(4) a::before {
		content: "";
		background-image: url(${github});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;
		width: 26px;
		height: 26px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
`;
