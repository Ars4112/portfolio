import styled from "styled-components";
import { SpanHidden } from "./SpanHidden";
import { Fade, Slide } from "react-awesome-reveal";

type BurgerButtonPropsType = {
	setMenuOpen: (menuOpen: boolean) => void;
	menuOpen: boolean;
};

type StylePropsType = {
	menuOpen: boolean;
};

export function BurgerButton(props: BurgerButtonPropsType) {
	const menuOpenOnClick = () => {
		props.setMenuOpen(!props.menuOpen);
		window.scrollTo({ top: 0 });
	};
	return (
		<ButtonWrapper>
			<BurgerMenu
				onClick={menuOpenOnClick}
				menuOpen={props.menuOpen}
				tabIndex={1}
			>
				<SpanHidden>
					{props.menuOpen ? "закрыть меню" : "открыть меню"}
				</SpanHidden>
			</BurgerMenu>
		</ButtonWrapper>
	);
}

const ButtonWrapper = styled(Slide)`
	display: none;
	@media (max-width: 768px) {
		display: block;
		position: relative;
		z-index: 10;
	}
`;

const BurgerMenu = styled.button<StylePropsType>`
	@media (max-width: 768px) {
		display: block;
		border: none;
		background-color: transparent;
		position: absolute;
		top: 0;
		cursor: pointer;
		padding: 35px;
		left: min(50px, calc(1px + 49 * (100vw - 375px) / 393));
		left: ${({ menuOpen }) =>
			menuOpen
				? "min(655px, calc(306px + 349 * (100vw - 375px) / 393))"
				: "min(50px, calc(1px + 49 * (100vw - 375px) / 393))"};
		transition: ${({ menuOpen }) =>
			menuOpen ? "left 0.5s 0.5s" : "left 0.5s 0.7s"};
		z-index: 10;

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
`;
