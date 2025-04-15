import styled from "styled-components";
import { Link } from "../../components/Link";
import { Fade } from "react-awesome-reveal";
import { InfoType } from "./projectInfo";

export const SliderItem = (props: InfoType) => {
	return (
		<Item>
			<Fade triggerOnce delay={500}>
				<img src={props.img} alt="" loading="lazy" />
			</Fade>
			<Fade direction="up" delay={500} triggerOnce>
				<ItemWrapper>
					<h3>{props.title}</h3>
					<p>{props.subTitle}</p>
					<dl>
						<dt>Стек:</dt>
						<dd>{props.stack}</dd>
					</dl>
					<dl>
						<dt>Функционал:</dt>
						<dd>{props.description}</dd>
					</dl>
					<Fade direction="right" delay={1200} triggerOnce>
						<Link href={"https://github.com/Ars4112"}>GitHub</Link>
					</Fade>
				</ItemWrapper>
			</Fade>
		</Item>
	);
};

const Item = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	& img {
		width: 100%;
		object-fit: cover;

		/* @media (max-width: 768px) {
			width: 100%;
		} */
	}
`;

const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(2, auto);
	grid-auto-rows: auto;
	gap: 1.5rem min(38px, calc(3px + 35 * (100vw - 768px) / 672));
	font-size: 0.8rem;

	& h3 {
		font-weight: 600;
		font-size: 4.38rem;
		line-height: 83%;
		letter-spacing: 0.5rem;

		@media (max-width: 768px) {
			font-size: min(50px, calc(30px + 20 * (100vw - 375px) / 393));
			margin-bottom: 1rem;
		}
	}

	& p {
		grid-column: 3 / span 3;
		align-self: self-end;

		@media (max-width: 768px) {
			align-self: self-start;
		}
	}

	& dl:first-of-type {
		& dd {
			font-size: 1rem;
			letter-spacing: 0.1rem;
		}
	}

	& dl:last-of-type {
		grid-column: 3 / span 3;
		grid-row: 2/3;
	}

	& dt {
		font-weight: 600;
		font-size: 1.25rem;
		line-height: 150%;
		margin-bottom: 0.5rem;
	}

	& dd {
		line-height: 1rem;
	}

	& div {
		grid-column: 6/7;
		grid-row: 1/2;
		align-self: self-start;

		@media (max-width: 768px) {
			align-self: flex-end;
		}
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`;
