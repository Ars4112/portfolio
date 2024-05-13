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
	font-size: 4.94rem;
	line-height: 5.19rem;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #272526;

	& > span {
		color: #a12a30;
	}

	@media (max-width: 768px) {
		font-size: min(60px, calc(36px + 24 * (100vw - 375px) / 393));
		line-height: 4rem;
	}

	@media (max-width: 375px) {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}
`;
