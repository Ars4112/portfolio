
import styled from "styled-components";
import { Container } from "./Container";

export function Header() {
	return (
		<HeaderStyled>
			<ContainerHeader>
				<Nav>
					<NavList>
						<ListItem>
							<a href="###">Проекты</a>
						</ListItem>
						<ListItem>
							<a href="###">Обо мне</a>
						</ListItem>
						<ListItem>
							<a href="###">Контакты</a>
						</ListItem>
					</NavList>
				</Nav>
				<Group>
					<ul>
						<li>
							<button>Ru</button>
						</li>
						<li>
							<button>En</button>
						</li>
					</ul>
					<ul>
						<li>
							<button>Light</button>
						</li>
						<li>
							<button>Dark</button>
						</li>
					</ul>
				</Group>
			</ContainerHeader>
		</HeaderStyled>
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
	padding-top: min(50px, calc(20px + 30 * (100vw - 376px) / 1065));
`;

const ContainerHeader = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 50px;
`;

const Nav = styled.nav`
	height: 100%;
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;

	& a {
		font-family: "Noto Sans", sans-serif;
		font-weight: 400;
		font-size: 1rem;
		padding: 20px;
		white-space: nowrap;
	}
`;

const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	& > ul {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& button {
		border: none;
		background-color: transparent;
		padding: 20px;
		font-family: "Noto Sans", sans-serif;
		font-weight: 400;
		font-size: 1.25rem;
		color: #272526;
	}
`;
