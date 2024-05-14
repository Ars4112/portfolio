import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BurgerButton } from "./components/BurgerButton";
import { GoToTop } from "./components/GoToTop";
import { MenuMobile } from "./components/MenuMobile";
import { Header } from "./layout/Header";
import { MainSection } from "./layout/MainSection";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Tools } from "./layout/Tools";
import { Projects } from "./layout/Projects";
import { About } from "./layout/About";
import { Contacts } from "./layout/Contacts";

export function App() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [scroll, setscroll] = useState<boolean>(false);
	
	const onScroll = () => {
		const currentScrollpos = window.scrollY
		if (currentScrollpos > 300) {
			setscroll(true)
			return
		} else setscroll(false);
	};
	useEffect(()=> {
		window.addEventListener("scroll",onScroll)
	})


	return (
		<>
			<GlobalStyles menuOpen={menuOpen} />
			{scroll && <GoToTop />}
			<BurgerButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
			<MenuMobile menuOpen={menuOpen} />
			<Wrapper>
				<Header />
				<main>
					<MainSection />
					<Tools />
					<Projects />
					<About />
					<Contacts />
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
