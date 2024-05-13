import styled from "styled-components";
import { MainInscription } from "./MainInscription";
import { Container } from "./Container";
import { Slider } from "./Slider";


import { Link } from "./Link";

export function Projects() {
	return (
		<Section>
			<SectionContainer>
				<TitleWrapper>
					<h2>
						<MainInscription>
							МОИ <span>ПРОЕКТЫ</span>
						</MainInscription>
					</h2>
					<Link href="#">Смотреть все</Link>
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
	/* gap: min(84px, calc(30px + 54 * (100vw - 375px) / 1065)); */
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

	& a {
		flex-shrink: 0;

		@media (max-width: 768px) {
		margin-left: auto;
	}
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
