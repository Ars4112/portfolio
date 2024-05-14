import styled from "styled-components";
import { Education } from "./Education";
import { Container } from "../components/Container";
import photo from "../assets/img/photo-1.jpg";
import { Element } from "react-scroll";

export function About() {
	return (
		<Section id="about">
			<Container>
				<AboutContainer>
					<picture>
						<img
							src={photo}
							alt="Еду в метро на эскалаторе и смотрю вверх"
							width={"580"}
							height={"544"}
							loading="lazy"
						/>
					</picture>

					<Wrapper>
						<h3>Обо мне</h3>
						<TextStyle>
							Искал себя во&nbsp;многих профессиях. И&nbsp;нашел&nbsp;&mdash;
							в&nbsp;разработке.
						</TextStyle>
					</Wrapper>
				</AboutContainer>
				<Education />
			</Container>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;

	& ${Container} {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 5.25rem;

		@media (max-width: 768px) {
			gap: 2.68rem;
		}
	}
`;

const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto;
	justify-content: space-between;
	padding-top: 1.5rem;

	& > img {
		object-fit: contain;
		width: 36.25rem;

		@media (max-width: 768px) {
			width: 100%;
			justify-self: center;
		}
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
`;

const Wrapper = styled.div`
	padding-bottom: 3.125rem;
	padding-left: 9.06rem;
	display: flex;
	flex-direction: column;

	& > h3 {
		font-weight: 600;
		font-size: 24px;
		line-height: 31px;
	}

	@media (max-width: 768px) {
		padding: 0;
		gap: 18px;
	}
`;

const TextStyle = styled.p`
	font-size: 3.75rem;
	line-height: 4.375rem;
	color: #a12a30;
	margin-top: auto;

	@media (max-width: 768px) {
		font-size: 3rem;
		line-height: 3.5rem;
		margin: 0;
	}

	@media (max-width: 375px) {
		font-size: 2.5rem;
		line-height: 2.75rem;
		margin: 0;
	}
`;
