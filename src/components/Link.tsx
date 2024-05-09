import styled from "styled-components";
import arrow from "../assets/img/svg/arrow-link.svg";

type PropsType = {
	children: React.ReactNode;
	href: string;
};

export function Link(props: PropsType) {
	return <LinkStyle href={props.href}>{props.children}</LinkStyle>;
}

const LinkStyle = styled.a`
	position: relative;
	font-weight: 600;
	font-size: 1.12rem;
	line-height: 150%;
    padding: 0 40px 20px 20px;

	&::after {
		content: "";
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 6px;
		width: 8px;
		height: 12px;
		position: absolute;
		top: 7px;
		right: 10px;
        transition: right 0.3s;
	}

	@media (hover: hover) {
		&:hover::after {
			right: 0;
			background-size: 10px;
			width: 10px;
			height: 17px;
		}
	}

	@media (hover: none) {
		&:active::after {
            right: 0;
			background-size: 10px;
			width: 10px;
			height: 17px;
		}
	}
`;
