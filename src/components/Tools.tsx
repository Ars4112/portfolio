import styled from "styled-components";
import { Container } from "./Container";
import { Icons } from "./Icons";

type toolsArrayType = {
	id: number;
	spriteId: string;
};

const toolsListArray: Array<toolsArrayType> = [
	{
		id: 1,

		spriteId: "html",
	},
	{
		id: 2,

		spriteId: "css",
	},
	{
		id: 3,

		spriteId: "javascript",
	},
	{
		id: 4,

		spriteId: "typescript",
	},
	{
		id: 5,

		spriteId: "rest api",
	},
	{
		id: 6,

		spriteId: "react",
	},
	{
		id: 7,

		spriteId: "next js",
	},
	{
		id: 8,

		spriteId: "redux",
	},
	{
		id: 9,

		spriteId: "gulp",
	},
	{
		id: 10,
		spriteId: "webpack",
	},
	{
		id: 11,
		spriteId: "styled components",
	},
	{
		id: 12,
		spriteId: "git",
	},
	{
		id: 13,
		spriteId: "sass",
	},
	{
		id: 14,
		spriteId: "github",
	},
];

export function Tools() {
	return (
		<Section>
			<Container>
				<h2>Технологии и инструменты</h2>
				<List>
					{toolsListArray.map((i) => {
						return (
							<ListItem key={i.id} title={i.spriteId} aria-label={i.spriteId}>
								<Icons size="90" spriteId={i.spriteId} />
							</ListItem>
						);
					})}
				</List>
			</Container>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;
	background-color: #a12a30;
	
	padding: min(75px, calc(50px + 25 * (100vw - 768px) / 672)) 0;

	& h2 {
		font-weight: 400;
		font-size: min(40px, calc(30px + 20 * (100vw - 768px) / 672));
		line-height: 34px;
		letter-spacing: 5px;
		color: #dbba8f;
		margin: 0;
		margin-bottom: min(45px, calc(30px + 15 * (100vw - 768px) / 672));

		@media (max-width: 375px) {
			text-align: center;
			font-size: 20px;
			letter-spacing: 2px;
			margin-bottom: 8px;
		}
	}

	@media (max-width: 375px) {
		padding: 40px 0 51px;
		}
`;

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-auto-rows: auto;
	justify-content: center;

	@media (max-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 375px) {
		grid-template-columns: repeat(4, minmax(50px, 80px));
		}
`;

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1/1;

	& svg {
		width: min(90px, calc(50px + 40 * (100vw - 768px) / 672));
		height: min(90px, calc(50px + 40 * (100vw - 768px) / 672));

		@media (max-width: 768px) {
			width: min(90px, calc(50px + 40 * (100vw - 375px) / 393));
			height: min(90px, calc(50px + 40 * (100vw - 375px) / 393));
		}
	}

	@media (max-width: 768px) {
		aspect-ratio: none;
		}

	@media (max-width: 375px) {
		aspect-ratio: 1/1;
		}

	@media (hover: hover) {
		&:hover svg {
			opacity: 0.7;
			transform: scale(1.1);
			transition: scale 0.3s;
		}
	}

	@media (hover: none) {
		&:active {
			opacity: 0.7;
		}
	}
`;
