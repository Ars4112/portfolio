import styled from "styled-components";
import { Container } from "./Container";
import { Education } from "./Education";
import photo from "../assets/img/photo-1.jpg";

export function About() {
	return (
		<Section>
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
			<Education />
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 84px;
	padding: 40px 0;
`;

const AboutContainer = styled(Container)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: auto;
	justify-content: space-between;
	gap: 50px;

	& > img {
		object-fit: contain;
		width: 100%;
	}
`;

const Wrapper = styled.div`
	padding-bottom: 60px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& h2 {
		font-family: "Noto Sans", sans-serif;
		font-weight: 600;
		font-size: 20px;
		line-height: 150%;
	}

	& p {
		font-family: "Noto Sans", sans-serif;
		font-weight: 400;
		font-size: 60px;
		line-height: 117%;
		color: #a12a30;
	}
`;
