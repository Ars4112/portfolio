import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

export function GoToTop() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return <TopButton onClick={scrollToTop} />;
}

const TopButton = styled.button`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
    position: fixed;
    bottom: 40px;
    right: 40px;
`;
