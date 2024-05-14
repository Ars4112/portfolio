import { Link } from "react-scroll";
import styled from "styled-components";

export function Nav() {
	return (
		<NavStyle>
			<NavList>
				<ListItem>
					<NavLink to="projects" smooth={true} tabIndex={0}>
						Проекты
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to="about" smooth={true} tabIndex={0}>
						Обо мне
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to="contacts" smooth={true} tabIndex={0}>
						Контакты
					</NavLink>
				</ListItem>
			</NavList>
		</NavStyle>
	);
}

const NavStyle = styled.nav`
	padding-top: 15px;
	flex-shrink: 1;
	@media (max-width: 768px) {
	}
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: min(64px, calc(20px + 44 * (100vw - 768px) / 672));
	flex-wrap: wrap;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: start;
		gap: 30px;
	}
`;

const ListItem = styled.li`
	background-color: #dbba8f;
	border-radius: 10px;
	padding: 5px;
`;

const NavLink = styled(Link)`
	font-size: 1rem;
	padding: 1.25rem 0;
	white-space: nowrap;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 18px;
		padding: 20px 9px;
	}
`;
