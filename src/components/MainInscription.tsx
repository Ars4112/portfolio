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
	font-size: 5.25rem;
	line-height: 126%;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #272526;

    & > span {
        color: #A12A30;
    }
`;
