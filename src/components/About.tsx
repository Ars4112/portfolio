import styled from "styled-components";
import photo from "../assets/img/photo-1.jpg";

export function About() {
	return (
		<AboutContainer>
			<img
				src={photo}
				alt="Еду в метро на эскалаторе и смотрю вверх"
				width={"580"}
				height={"544"}
			/>
			<Wrapper>
				<h2>Обо мне</h2>
				<p>
					Искал себя во&nbsp;многих профессиях. И&nbsp;нашел&nbsp;&mdash;
					в&nbsp;разработке.
				</p>
			</Wrapper>
		</AboutContainer>
	);
}

const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto;
	justify-content: space-between;
	padding-top: 24px;

	& > img {
		object-fit: contain;
		width: 100%;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 40px;
	}
`;

const Wrapper = styled.div`
	padding-bottom: 50px;
	padding-left: min(145px, calc(70px + 75 * (100vw - 768px) / 672));
	display: flex;
	flex-direction: column;

	& h2 {
		font-weight: 600;
		font-size: 24px;
		line-height: 31px;
	}

	& p {
		font-size: min(65px, calc(15px + 50 * (100vw - 376px) / 1065));
		line-height: min(70px, calc(50px + 20 * (100vw - 376px) / 1065));
		color: #a12a30;
		margin-top: auto;

		@media (max-width: 768px) {
			font-size: min(55px, calc(48px + 7 * (100vw - 375px) / 393));
		/* line-height: min(70px, calc(50px + 20 * (100vw - 376px) / 1065)); */
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		padding: 0;
		gap: 25px;
	}
`;
