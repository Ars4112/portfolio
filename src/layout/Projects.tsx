import styled from "styled-components";
import { MainInscription } from "../components/MainInscription";
import { Container } from "../components/Container";
import { Slider } from "./Slider";
import { Link } from "../components/Link";
import { Fade } from "react-awesome-reveal";

export function Projects() {
	return (
		<Section id="projects">
			<SectionContainer>
				<TitleWrapper>
					<Fade direction="left" triggerOnce>
						<h2>
							<MainInscription>
								МОИ <span>ПРОЕКТЫ</span>
							</MainInscription>
						</h2>
					</Fade>
					<Fade direction="right" triggerOnce>
						<Link href="#">Смотреть все</Link>
					</Fade>
				</TitleWrapper>
				<Slider />
			</SectionContainer>
		</Section>
	);
}

const Section = styled.section`
	padding: min(171px, calc(50px + 121 * (100vw - 768px) / 672)) 0 42px;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		padding: 3.125rem 0 2.625rem;
	}
`;

const SectionContainer = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 5.25rem;

	& h2 {
		align-self: flex-start;
	}

	@media (max-width: 768px) {
		gap: 2.25rem;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.25rem;
	width: 100%;

	& div:last-child {
		flex-shrink: 0;

		@media (max-width: 768px) {
			align-self: flex-end;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
