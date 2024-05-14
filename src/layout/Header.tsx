import { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { SwitchGroup } from "../components/switch/SwitchGroup";
import { Nav } from "../components/Nav";

export function Header() {
	
	return (
		<>
			<HeaderStyled>
				<ContainerHeader>
					<Nav />
					<SwitchGroup />
				</ContainerHeader>
			</HeaderStyled>
		</>
	);
}

const HeaderStyled = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: min(30px, calc(10px + 20 * (100vw - 376px) / 1065));

	
`;

const ContainerHeader = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 50px;

	@media (max-width: 768px) {
		display: none;
	}

	
`;
