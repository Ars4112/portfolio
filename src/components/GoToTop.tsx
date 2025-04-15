import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

export function GoToTop() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return <TopButton onClick={scrollToTop} />;
}

const TopButton = styled.button`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: none;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	bottom: 40px;
	right: 40px;
	z-index: 2;
	scale: 0.8;
	transition: scale 0.3s;

	&::before,
	::after {
		content: "";
		position: absolute;
		top: 45%;
		width: 15px;
		height: 2px;
		background-color: rgba(255, 255, 255, 0.5);
	}

	&::before {
		left: 50%;
		translate: -15% 50%;
		rotate: 45deg;
	}

	&::after {
		right: 50%;
		translate: 15% 50%;
		rotate: -45deg;
	}

	@media (hover: hover) {
		&:hover {
			scale: 1;

			&::before,
			::after {
				background-color: rgba(255, 255, 255, 0.8);
			}
		}
	}
`;
