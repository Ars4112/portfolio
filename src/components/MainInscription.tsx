import styled from "styled-components";

type PropsType = {
	children: React.ReactNode;
};

export function MainInscription(props: PropsType) {
	return <InscriptionStyle>{props.children}</InscriptionStyle>;
}

const InscriptionStyle = styled.span`
	font-family: "Dela Gothic One", sans-serif;
	font-weight: 400;
	font-size: min(79px, calc(50px + 39 * (100vw - 768px) / 672));
	line-height: 51px;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #272526;

	& > span {
		color: #a12a30;
	}

	@media (max-width: 768px) {
		font-size: min(60px, calc(36px + 24 * (100vw - 375px) / 393));
	}

	@media (max-width: 375px) {
		line-height: 38px;
	}
`;
