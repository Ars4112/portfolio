import styled from "styled-components";

export const Container = styled.div`
	width: min(1440px, 100%);
	/* padding-inline: 8.75rem; */
	padding-inline: min(140px, calc(20px + 120 * (100vw - 376px) / 1065));

	/* border: 2px solid #000000; */

	@media (max-width: 768px) {
		padding-inline: min(140px, calc(20px + 120 * (100vw - 376px) / 1065));
	}
`;
