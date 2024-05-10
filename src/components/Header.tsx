import { useState } from "react";
import styled, { css } from "styled-components";
import { Container } from "./Container";

type propsType = {
	menuOpen: Boolean;
};

export function Header() {
	const [menuOpen, setMenuOpen] = useState<Boolean>(false);

	const menuOpenOnClick = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<HeaderStyled menuOpen={menuOpen}>
			<BurgerButton onClick={menuOpenOnClick} menuOpen={menuOpen}>
				<SpanHidden>{menuOpen ? "закрыть меню" : "открыть меню"}</SpanHidden>
			</BurgerButton>
			<ContainerHeader>
				<Nav>
					<NavList>
						<ListItem>
							<a href="###">Проекты</a>
						</ListItem>
						<ListItem>
							<a href="###">Обо мне</a>
						</ListItem>
						<ListItem>
							<a href="###">Контакты</a>
						</ListItem>
					</NavList>
				</Nav>
				<Group>
					<ul>
						<li>
							<button>Ru</button>
						</li>
						<li>
							<button>En</button>
						</li>
					</ul>
					<ul>
						<li>
							<button>Light</button>
						</li>
						<li>
							<button>Dark</button>
						</li>
					</ul>
				</Group>
			</ContainerHeader>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header<propsType>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: min(50px, calc(20px + 30 * (100vw - 376px) / 1065));

	@media (max-width: 768px) {
		padding-top: 0;
		height: ${({ menuOpen }) => (menuOpen ? "100vh" : "0")};
		background-color: #dbba8f;
		transition: height 2s;
	}
`;

const ContainerHeader = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 50px;

	@media (max-width: 768px) {
		position: absolute;
		top: -100%;
	}
`;

const BurgerButton = styled.button<propsType>`
	display: none;
	@media (max-width: 768px) {
		display: block;
		border: none;
		background-color: transparent;
		position: absolute;
		top: min(30px, calc(1px + 29 * (100vw - 375px) / 393));
		cursor: pointer;
		padding: 35px;
		left: ${({ menuOpen }) =>
			menuOpen
				? "min(655px, calc(306px + 349 * (100vw - 375px) / 393))"
				: "min(50px, calc(1px + 49 * (100vw - 375px) / 393))"};
		transition: left 0.5s;

		&::before,
		::after {
			content: "";
			width: 35px;
			height: 8px;
			background-color: #a12a30;
			position: absolute;
			left: 50%;
		}

		&::before {
			top: ${({ menuOpen }) => (menuOpen ? "50%" : "23px")};
			transform: ${({ menuOpen }) =>
				menuOpen
					? "translate(-50%, -50%) rotate(45deg)"
					: "translate(-50%,0) rotate(0)"};
		}

		&::after {
			bottom: ${({ menuOpen }) => (menuOpen ? "50%" : "23px")};
			transform: ${({ menuOpen }) =>
				menuOpen
					? "translate(-50%,50%) rotate(-45deg)"
					: "translate(-50%,0) rotate(0)"};
		}
	}
	@media (max-width: 375px) {
		top: 0;
		left: ${({ menuOpen }) =>
			menuOpen ? "min(306px, calc(200px + 106 * (100vw - 200px) / 175))" : "0"};
	}
`;

const SpanHidden = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	white-space: nowrap;
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(100%);
`;

const Nav = styled.nav`
	height: 100%;

	/* @media (max-width: 768px) {
		display: none;
	} */
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;

	& a {
		font-weight: 400;
		font-size: 1rem;
		padding: 20px;
		white-space: nowrap;
	}
`;

const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	& > ul {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& button {
		border: none;
		background-color: transparent;
		padding: 20px;
		font-weight: 400;
		font-size: 1.25rem;
		color: #272526;
	}

	/* @media (max-width: 768px) {
		display: none;
	} */
`;
