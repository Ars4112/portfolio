import styled from "styled-components";
import { Link } from "../components/Link";
import keksogram from "../assets/img/slider/keksogram.jpg";
import keksogramWebp2 from "../assets/img/slider/keksogram_2x.webp";
import keksogramWebp from "../assets/img/slider/keksogram.webp";
import keksogramJpg2 from "../assets/img/slider/keksogram@2x.jpg";
import keksogramJpgMobile from "../assets/img/slider/keksogram-mobile.jpg";
import keksogramJpg2Mobile from "../assets/img/slider/keksogram-mobile@2x.jpg";
import keksogramWebpMobile from "../assets/img/slider/keksogram-mobile.webp";
import keksogramWebp2Mobile from "../assets/img/slider/keksogram-mobile_2x.webp";
import { Fade } from "react-awesome-reveal";

export function Slider() {
	return (
		<SliderContainer>
			<List>
				<Item>
					<Fade triggerOnce delay={500}>
						<picture>
							<source
								media="(max-width: 375px)"
								type="image/webp"
								srcSet={`${keksogramWebpMobile} 1x, ${keksogramWebp2Mobile} 2x`}
							/>
							<source
								media="(max-width: 375px)"
								srcSet={`${keksogramJpgMobile} 1x, ${keksogramJpg2Mobile} 2x`}
							/>
							<source
								type="image/webp"
								srcSet={`${keksogramWebp} 1x, ${keksogramWebp2} 2x`}
							/>

							<img
								src={keksogram}
								srcSet={`${keksogramJpg2} 2x`}
								alt=""
								loading="lazy"
							/>
						</picture>
					</Fade>
					<Fade direction="up" delay={500} triggerOnce>
						<ItemWrapper>
							<h3>Keksogram</h3>
							<p>Как Instagram. Только Keksogram и десктопное приложение</p>
							<dl>
								<dt>Стек:</dt>
								<dd>HTML, CSS, JS, Gulp, Webpack</dd>
							</dl>
							<dl>
								<dt>Функционал:</dt>
								<dd>
									Загрузка фотографий, рандомный показ публикаций, генерация
									рандомного числа лайков и&nbsp;комментариев + подгрузка этого
									числа комментариев в&nbsp;публикации, наложение фильтров
									на&nbsp;фотографию, валидация формы, добавление новых
									комментариев под фото.
								</dd>
							</dl>
							<Fade direction="right" delay={1200} triggerOnce>
								<Link href={"#"}>GitHub</Link>
							</Fade>
						</ItemWrapper>
					</Fade>
				</Item>
			</List>
		</SliderContainer>
	);
}

const SliderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const List = styled.ul`
	display: flex;
	justify-content: center;
`;

const Item = styled.li`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	& img {
		object-fit: contain;

		@media (max-width: 768px) {
			width: 100%;
		}
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
		line-height: 71%;
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
