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

// const Section = styled.section`
// 	display: flex;
// 	align-items: center;
	
	
// `;

const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(300px, 1fr));
	grid-auto-rows: auto;
	justify-content: space-between;
	gap: 50px;

	& > img {
		object-fit: contain;
		width: 100%;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;		
	}
`;

const Wrapper = styled.div`
	padding-bottom: 60px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	justify-self: end;

	& h2 {
		font-weight: 600;
		font-size: 20px;
		line-height: 150%;
	}

	& p {
		font-weight: 400;
		font-size: min(60px, calc(15px + 45 * (100vw - 376px) / 1065));
		line-height: 117%;
		color: #a12a30;
	}
`;
