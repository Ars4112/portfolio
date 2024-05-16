import styled from "styled-components";
import { Container } from "../components/Container";
import mainPhoto from "../assets/img/photo-main.png";
import mainPhotoWebp2x from "../assets/img/photo-main_2x.webp";
import mainPhotoWebp from "../assets/img/photo-main.webp";
import { MainInscription } from "../components/MainInscription";
import { Fade } from "react-awesome-reveal";

export function MainSection() {
	return (
		<Section>
			<MainContainer>
				<TextWrapper>
					<Fade direction={"down"} delay={500} triggerOnce>
						<p>
							<MainInscription>
								<span>ПРИВЕТ</span>, Я&nbsp;АРСЕНИЙ
							</MainInscription>
						</p>
						<h1>
							Frontend-разработчик <br /> из Санкт-Петербурга
						</h1>
					</Fade>
				</TextWrapper>
			</MainContainer>
		</Section>
	);
}

const Section = styled.section`
	height: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
`;

const MainContainer = styled(Container)`
	display: flex;
	background-image: url(${mainPhoto});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	height: 100%;

	@media (min-resolution: 1dppx), (-webkit-min-device-pixel-ratio: 1) {
		background-image: url(${mainPhotoWebp});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	@media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
		background-image: url(${mainPhotoWebp2x});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;
	width: 100%;
	gap: 1.25rem;
	padding-bottom: 2.5rem;

	& p {

		text-align: center;
	}

	& h1 {
		font-size: 1.25rem;
		line-height: 125%;
		text-align: end;
		padding-right: min(162px, calc(70px + 92 * (100vw - 768px) / 672));

		& br {
			display: none;

			@media (max-width: 375px) {
				display: block;
			}
		}

		@media (max-width: 768px) {
			font-size: min(24px, calc(17px + 7 * (100vw - 375px) / 393));
			text-align: center;
			padding-right: 0;
		}

		@media (max-width: 375px) {
			font-size: 17px;
		}
	}

	/* @media (max-width: 768px) {
			align-items: center;
		} */

	@media (max-width: 375px) {
		padding-bottom: 30px;
	}
`;
