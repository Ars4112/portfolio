
import styled from "styled-components";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { GlobalStyles } from "./styles/GlobalStyles";
import {Tools} from "./components/Tools"
import {Projects} from "./components/Projects"

export function App() {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Header />
				<main>
					<MainSection />
					<Tools/>
					<Projects/>
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
	}

	& main {
		flex-grow: 1;
	}
`;
