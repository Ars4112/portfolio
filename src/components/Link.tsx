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
	line-height: 10px;
    padding: 0.625rem 2.5rem 0.625rem 0.625rem;
	text-align: end;

	&::after {
		content: "";
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 6px;
		width: 8px;
		height: 12px;
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
        transition: right 0.3s;
	}

	@media (hover: hover) {
		&:hover::after {
			right: 0;
		}
	}

	@media (hover: none) {
		&:active::after {
            right: 0;
		}
	}
`;
