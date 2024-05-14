import styled from "styled-components";
import { SwitchGroup } from "./switch/SwitchGroup";
import { Nav } from "./Nav";
import { Container } from "./Container";

export function MenuMobile(props: { menuOpen: boolean }) {
	return (
		<MenuStyle menuOpen={props.menuOpen}>
			<Container>
				<SwitchGroup />
				<Nav />
			</Container>
		</MenuStyle>
	);
}

const MenuStyle = styled.div<{ menuOpen: boolean }>`
	display: none;
	@media (max-width: 768px) {
		display: block;
		position: fixed;
		left: 0;
		right: 0;
		height: 100vh;
		background-color: #dbba8f;
		padding-top: 3.25rem;
		top: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
		height: ${({ menuOpen }) => (menuOpen ? "100vh" : "0")};
		transition: ${({ menuOpen }) =>
			menuOpen
				? "height 0.7s ease-in-out"
				: "height 0.7s ease-in-out 1s, top 1s 1.5s"};

		align-items: start;
		padding-top: 40px;

		& ${Container} {
			width: ${({ menuOpen }) => (menuOpen ? "100%" : "0")};
           height: ${({ menuOpen }) => (menuOpen ? "100%" : "0")};
			opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
			transition: ${({ menuOpen }) =>
				menuOpen
					? "width 0.5s ease-in-out 1s, opacity 0.2s 1s"
					: "width 0.5s ease-in-out, opacity 0.1s 0.4s"};
			gap: 20px;
			overflow-x: hidden;
		}
	}
`
