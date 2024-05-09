import styled from "styled-components";
import { MainInscription } from "./MainInscription";
import { Container } from "./Container";
import mobile from "../assets/img/svg/mobile.svg";
import telegram from "../assets/img/svg/telegram.svg";
import letter from "../assets/img/svg/letter.svg";
import github from "../assets/img/svg/github.svg";

export function Contacts() {
	return (
		<Section>
			<ContactsContainer>
				<h2>
					<MainInscription>
						<span>СВЯЗАТЬСЯ</span> СО МНОЙ
					</MainInscription>
				</h2>
				<List>
					<ListItem>
						<a href="##">+ 7 (952) 245-49-49</a>
					</ListItem>
					<ListItem>
						<a href="##">@Ars4112</a>
					</ListItem>
					<ListItem>
						<a href="##">ars4112@gmail.com</a>
					</ListItem>
					<ListItem>
						<a href="##">Ars4112</a>
					</ListItem>
				</List>
			</ContactsContainer>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;
    padding: 75px 0;
`;

const ContactsContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 64px;

	& h2 {
		text-align: center;
	}
`;

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;
`;

const ListItem = styled.li`
	& a {
		font-weight: 600;
		font-size: 18px;
		line-height: 150%;
        padding: 20px 20px 20px 45px;
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
