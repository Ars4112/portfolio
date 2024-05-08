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
								<Icons size="80" spriteId={i.spriteId} />
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
	padding: 75px 0;

	& h2 {
		font-family: "Noto Sans", sans-serif;
		font-weight: 400;
		font-size: 2.5rem;
		line-height: 125%;
		color: #dbba8f;
		margin: 0;
		margin-bottom: 50px;
	}
`;

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
`;

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1/1;

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
