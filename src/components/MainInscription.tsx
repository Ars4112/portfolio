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
	font-size: min(84px, calc(30px + 54 * (100vw - 376px) / 1065));
	line-height: 126%;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #272526;

    & > span {
        color: #A12A30;
    }
`;
