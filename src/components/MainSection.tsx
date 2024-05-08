import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import mainPhoto from "../assets/img/photo-main.png";
import mainPhotoWebp2x from "../assets/img/photo-main_2x.webp";
import mainPhotoWebp from "../assets/img/photo-main.webp";

export function MainSection() {
	return (
		<Section>
			<MainContainer>
				<TextWrapper>
					<h1>
						<span>ПРИВЕТ</span>, Я АРСЕНИЙ
					</h1>
				</TextWrapper>
			</MainContainer>
		</Section>
	);
}

const Section = styled.section`
	background-color: #dbba8f;
	height: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
`;

const MainContainer = styled(Container)`
	display: flex;
	background: url(${mainPhoto}) no-repeat center/cover;
	min-height: 100vh;
	height: 100%;
	border: 2px solid #000000;

	@media (min-resolution: 1dppx), (-webkit-min-device-pixel-ratio: 1) {
		background: url(${mainPhotoWebp}) no-repeat center/cover;
	}

	@media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
		background: url(${mainPhotoWebp2x}) no-repeat center/cover;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;

	& h1 {
		font-weight: 400;
		font-size: 5.25rem;
		line-height: 126%;
		letter-spacing: -0.03em;
		text-align: center;
		text-transform: uppercase;
		color: #272526;
	}
`;
