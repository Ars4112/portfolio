import { useState, useEffect } from "react";
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
		const currentScrollpos = window.scrollY;
		if (currentScrollpos > 300) {
			setscroll(true);
			return;
		} else setscroll(false);
	};

	const preventPropagation = (evt: Event) => {
		evt.stopPropagation();
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		const wrapper = document.querySelector("#wrapper");
		const menuMobile = document.querySelector("#menuMobile");
		const navLink = menuMobile?.querySelectorAll("nav a");

		if (menuOpen) {
			wrapper?.addEventListener("focus", preventPropagation, true);
			wrapper?.querySelectorAll("button, a, input, textarea").forEach((i) => {
				i.setAttribute("tabIndex", "-1");
			});
			menuMobile?.removeEventListener("focus", preventPropagation, true);
			menuMobile
				?.querySelectorAll("button, a, input, textarea")
				.forEach((i) => {
					i.removeAttribute("tabIndex");
				});
			navLink?.forEach((i) => {
				i.setAttribute("tabIndex", "0");
			});
		} else {
			wrapper?.removeEventListener("focus", preventPropagation, true);
			wrapper?.querySelectorAll("button, a, input, textarea").forEach((i) => {
				i.removeAttribute("tabIndex");
			});
			menuMobile?.addEventListener("focus", preventPropagation, true);
			menuMobile
				?.querySelectorAll("button, a, input, textarea")
				.forEach((i) => {
					i.setAttribute("tabIndex", "-1");
				});
		}

		return wrapper?.removeEventListener("focus", preventPropagation, true);
	}, [menuOpen]);

	return (
		<>
			<GlobalStyles menuOpen={menuOpen} />
			<BurgerButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
			<MenuMobile menuOpen={menuOpen} />
			<Wrapper id="wrapper">
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
			{scroll && <GoToTop />}
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
