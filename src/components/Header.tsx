import { useState } from "react";
import styled from "styled-components";
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
		<>
			<BurgerButton
				onClick={menuOpenOnClick}
				menuOpen={menuOpen}

			>
				<SpanHidden>{menuOpen ? "закрыть меню" : "открыть меню"}</SpanHidden>
			</BurgerButton>
			<HeaderStyled menuOpen={menuOpen}>
				<ContainerHeader menuOpen={menuOpen}>
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
								<button>
									<span>Ru</span>
								</button>
							</li>
							<li>
								<button>
									<span>En</span>
								</button>
							</li>
						</ul>
						<ul>
							<li>
								<button>
									<span>Light</span>
								</button>
							</li>
							<li>
								<button>
									<span>Dark</span>
								</button>
							</li>
						</ul>
					</Group>
				</ContainerHeader>
			</HeaderStyled>
		</>
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
	padding-top: min(30px, calc(10px + 20 * (100vw - 376px) / 1065));

	@media (max-width: 768px) {
		top: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
		padding-top: 0;
		height: ${({ menuOpen }) => (menuOpen ? "100vh" : "0")};
		background-color: #dbba8f;
		transition: ${({ menuOpen }) =>
			menuOpen
				? "height 0.7s ease-in-out"
				: "height 0.7s ease-in-out 1s, top 1s 1.5s"};

		align-items: start;
		padding-top: 40px;
	}
`;

const ContainerHeader = styled(Container)<propsType>`
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 50px;
	

	@media (max-width: 768px) {
		
		width: ${({ menuOpen }) => (menuOpen ? "100%" : "0")};
		opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
		transition: ${({ menuOpen }) =>
			menuOpen
				? "width 0.5s ease-in-out 1s, opacity 0.2s 1s"
				: "width 0.5s ease-in-out, opacity 0.1s 0.4s"};
		flex-direction: column-reverse;
		gap: 20px;
		overflow-x: hidden;
	}
`;

const BurgerButton = styled.button<propsType>`
	display: none;
	@media (max-width: 768px) {
		display: block;
		border: none;
		background-color: transparent;
		position: absolute;
		top: 0;
		cursor: pointer;
		padding: 35px;
		left: ${({ menuOpen }) =>
			menuOpen
				? "min(655px, calc(306px + 349 * (100vw - 375px) / 393))"
				: "min(50px, calc(1px + 49 * (100vw - 375px) / 393))"};
		transition: ${({ menuOpen }) =>
			menuOpen ? "left 0.5s 0.5s" : "left 0.5s 0.7s"};
		z-index: 1;

		&::before,
		::after {
			content: "";
			width: 35px;
			height: 8px;
			background-color: #a12a30;
			position: absolute;
			top: 50%;
			left: 50%;
			transition: ${({ menuOpen }) =>
				menuOpen ? "all 0.5s 0.5s" : "all 0.5s 0.7s"};
		}

		&::before {
			transform: ${({ menuOpen }) =>
				menuOpen
					? "translate(-50%, 0) rotate(45deg)"
					: "translate(-50%,100%) rotate(0)"};
		}

		&::after {
			transform: ${({ menuOpen }) =>
				menuOpen
					? "translate(-50%, 0) rotate(-45deg)"
					: "translate(-50%,-100%) rotate(0)"};
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
	padding-top: 15px;
	flex-shrink: 1;
	@media (max-width: 768px) {
	}
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: min(64px, calc(20px + 44 * (100vw - 768px) / 672));
	flex-wrap: wrap;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: start;
		gap: 30px;
	}
`;

const ListItem = styled.li`
	background-color: #dbba8f;
	border-radius: 10px;
	padding: 5px;

	& a {
		font-size: 1rem;
		padding: 1.25rem 0;
		white-space: nowrap;

		@media (max-width: 768px) {
		font-size: 18px;
		padding: 20px 9px;
	}
	}
`;

const Group = styled.div`
	
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: end;
	justify-items: end;
	
	gap: 1.56rem;

	& > ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.56rem;

		& li {
			position: relative;
			font-size: 1.25rem;
		}

		& li:not(:first-child)::before {
			content: "";
			width: 1px;
			height: 1.5em;
			background-color: #272526;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: -13px;
		}
	}

	& button {
		border: none;
		background-color: transparent;
		padding: 23px 6px;
		font-size: 1em;
		cursor: pointer;

		& span {
			background-color: #dbba8f;
			border-radius: 10px;
			padding: 5px;
		}

		@media (max-width: 768px) {
			padding: 15px 6px;
	}
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: start;
        gap: 10px;
		& > ul {
		}
	}
`;
