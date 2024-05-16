import styled from "styled-components";
import { Container } from "../components/Container";
import { Icons } from "../components/Icons";
import { SpanHidden } from "../components/SpanHidden";
import { Fade } from "react-awesome-reveal";

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
				<Fade direction="left" triggerOnce>
					<h2>Технологии и инструменты</h2>
				</Fade>
				<List>
					{toolsListArray.map((i, index) => {
						return (
							<Fade cascade delay={index * 60} fraction={1} triggerOnce>
								<ListItem key={i.id} title={i.spriteId}>
									<SpanHidden>{i.spriteId}</SpanHidden>
									<Icons size="90" spriteId={i.spriteId} />
								</ListItem>
							</Fade>
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
		width: 5.625rem;
		height: 5.625rem;

		@media (max-width: 768px) {
			width: min(90px, calc(50px + 40 * (100vw - 375px) / 393));
			height: min(90px, calc(50px + 40 * (100vw - 375px) / 393));
		}
	}

	@media (max-width: 768px) {
		aspect-ratio: 1/1;
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
