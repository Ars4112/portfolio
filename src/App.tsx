import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Header />
				<main>
					<MainSection />
					<h2>dsadddadasdsa</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cumque
						pariatur et earum veniam culpa numquam, nemo, consequuntur, iusto
						magni aut. Quibusdam rerum voluptatibus at voluptatem laudantium
						alias nihil ducimus!
					</p>
				</main>
				<footer></footer>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	& header,
	footer {
		flex-shrink: 0;
		height: 100px;
	}

	& main {
		flex-grow: 1;

		& p {
			font-family: "Noto Sans", sans-serif;
			font-weight: 400;
			font-size: 1.06rem;
			line-height: 129%;
			text-align: center;
			color: #272526;
		}
	}
`;
