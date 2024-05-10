import styled from "styled-components";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Tools } from "./components/Tools";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";

export function App() {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Header />
				<main>
					<MainSection />
					<Tools />
					<Projects />
					<Contacts/>
				</main>
				<footer>
					<p>© Copyright 2024. Made by Arseniy Lipin</p>
				</footer>
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
	}

	& main {
		flex-grow: 1;
	}

	footer {
		display: flex;
		justify-content: center;
		padding: min(75px, calc(50px + 25 * (100vw - 768px) / 672)) 0 35px;
	}
`;
