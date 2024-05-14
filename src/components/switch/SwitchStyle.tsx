import styled from "styled-components";

type SwitchPropsType = {
	children: React.ReactNode;
};
export function SwitchStyle(props: SwitchPropsType) {
	return <List>{props.children}</List>;
}

const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.56rem;

	& li {
		position: relative;
		font-size: 1.25rem;
	}

	& li:not(:first-child)::before {
		content: "";
		width: 1px;
		height: 1.5em;
		background-color: #272526;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -13px;
	}

	& button {
		border: none;
		background-color: transparent;
		padding: 23px 6px;
		font-size: 1em;
		cursor: pointer;

		& span {
			background-color: #dbba8f;
			border-radius: 10px;
			padding: 5px;
		}

		@media (max-width: 768px) {
			padding: 15px 6px;
		}
	}
`;


