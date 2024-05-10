import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import mainPhoto from "../assets/img/photo-main.png";
import mainPhotoWebp2x from "../assets/img/photo-main_2x.webp";
import mainPhotoWebp from "../assets/img/photo-main.webp";
import { MainInscription } from "./MainInscription";

export function MainSection() {
	return (
		<Section>
			<MainContainer>
				<TextWrapper>
					<h1>
						<MainInscription>
							<span>ПРИВЕТ</span>, Я&nbsp;АРСЕНИЙ
						</MainInscription>
					</h1>
					<span>Frontend-разработчик из Санкт-Петербурга</span>
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
	gap: 20px;
	padding-bottom: 40px;

	& h1 {
		text-align: center;
	}

	& > span {
		font-size: 1.25rem;
		line-height: 125%;
		color: #272526;
		text-align: end;
	}
`;
