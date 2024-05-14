import styled from "styled-components";
import sprite from "../assets/img/svg/sprite.svg";

type PropsType = {
	children: React.ReactNode;
	href: string;
};

export function Link(props: PropsType) {
	return (
		<LinkStyle href={props.href}>
			{props.children}
			<svg width={"6"} height={"11"} viewBox="0 0 6 11">
				<use xlinkHref={`${sprite}#arrow`} />
			</svg>
		</LinkStyle>
	);
}

const LinkStyle = styled.a`
	font-weight: 600;
	font-size: 1.12rem;
	line-height: 10px;
	padding: 0.625rem 1.5rem 0.625rem 0.625rem;
	text-align: end;
	color: inherit;
	transition: color 0.5s;
	& svg {
		transform: translateX(10px) scale(1);
		transition: transform 0.5s;
	}

	@media (hover: hover) {
		&:hover {
			color: #a12a30;

			& svg {
				transform: translateX(20px) scale(1.1);
			}
		}
	}
	@media (hover: none) {
		&:active {
			color: #a12a30;

			& svg {
				transform: translateX(20px) scale(1.1);
			}
		}
	}
`;
