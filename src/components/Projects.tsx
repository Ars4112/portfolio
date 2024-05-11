import styled from "styled-components";
import { MainInscription } from "./MainInscription";
import { Container } from "./Container";
import { Slider } from "./Slider";
import { Education } from "./Education";
import { About } from "./About";


export function Projects() {
	return (
		<Section>
			<SectionContainer>
				<h2>
					<MainInscription>
						МОИ <span>ПРОЕКТЫ</span>
					</MainInscription>
				</h2>
				<Slider />
				<About/>
				<Education/>
			</SectionContainer>
			
		</Section>
	);
}

const Section = styled.section`
	padding: min(171px, calc(50px + 121 * (100vw - 768px) / 672)) 0 42px;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		padding: 50px 0 42px;
	}
`

const SectionContainer = styled(Container)`
	display: flex;
    align-items: center;
    flex-direction: column;
    gap: min(84px, calc(75px + 44 * (100vw - 375px) / 1065));

	& h2 {
		align-self: flex-start;
	}

	/* @media (max-width: 768px) {
		gap: min(75px, calc(40px + 44 * (100vw - 768px) / 672));
	} */
	
`;

