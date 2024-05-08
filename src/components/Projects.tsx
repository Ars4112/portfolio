import styled from "styled-components";
import { MainInscription } from "./MainInscription";
import { Container } from "./Container";

export function Projects() {
	return (
		<Section>
			<Container>
				<MainInscription element="h2">
					МОИ <span>ПРОЕКТЫ</span>
				</MainInscription>
			</Container>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;
	background-color: #dbba8f;
`;

// const InscriptionProject = styled(MainInscription)
