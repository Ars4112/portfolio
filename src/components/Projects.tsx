import styled from "styled-components";
import { MainInscription } from "./MainInscription";
import { Container } from "./Container";
import { Slider } from "./Slider";

export function Projects() {
	return (
		<Section>
			<Container>
				<h2>
					<MainInscription>
						МОИ <span>ПРОЕКТЫ</span>
					</MainInscription>
				</h2>
			</Container>
			<Slider />
		</Section>
	);
}

const Section = styled.section`
	display: flex;
    align-items: center;
    flex-direction: column;
    gap: 84px;
	padding: 171px 0 42px;
`;

