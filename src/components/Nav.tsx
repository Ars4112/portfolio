// import { Link } from "react-scroll";
import { useRef } from "react";
import styled from "styled-components";

export function Nav() {
	const anchorLink = useRef<HTMLAnchorElement>(null);

	const addSmoothScroll = (evt: React.MouseEvent<HTMLAnchorElement>) => {
		evt.preventDefault();
console.log(anchorLink.current);

		anchorLink.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	return (
		<NavStyle>
			<NavList>
				<ListItem>
					<NavLink href="#projects" ref={anchorLink} onClick={addSmoothScroll}>
						Проекты
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink href="#about" ref={anchorLink} onClick={addSmoothScroll}>
						Обо мне
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink href="#contacts" ref={anchorLink} onClick={addSmoothScroll}>
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

const NavLink = styled.a`
	font-size: 1rem;
	padding: 1.25rem 0;
	white-space: nowrap;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 18px;
		padding: 20px 9px;
	}
`;
