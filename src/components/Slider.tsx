import styled from "styled-components";
import { Link } from "./Link";
import keksogram from "../assets/img/keksogram.jpg";

export function Slider() {
	return (
		<SliderContainer>
			<List>
				<Item>
					<img src={keksogram} alt="" />
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
						<Link href={"#"}>GitHub</Link>
					</ItemWrapper>
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

	& li > img {
		object-fit: contain;
	}
`;

const Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`;

const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(2, auto);
	grid-auto-rows: auto;
	gap: 40px 30px;
	gap: min(40px, calc(25px + 15 * (100vw - 768px) / 672))
		min(36px, calc(20px + 16 * (100vw - 768px) / 672));

	& h3 {
		font-weight: 600;
		font-size: min(70px, calc(50px + 20 * (100vw - 768px) / 672));
		line-height: 71%;
		letter-spacing: 8px;
	}

	& p {
		grid-column: 3 / span 3;
	}

	& dl:first-of-type dd {
		font-size: 20px;
		letter-spacing: 2px;
	}

	& dl:last-of-type {
		grid-column: 3 / span 3;
	}

	& dt {
		font-weight: 600;
		font-size: 1.25rem;
		line-height: 150%;
		margin-bottom: min(18px, calc(10px + 8 * (100vw - 768px) / 672));
	}

	& a {
		grid-column: 6/7;
		grid-row: 1/2;
		align-self: self-start;

		line-height: 10px;

		@media (max-width: 768px) {
			align-self: flex-end;
		}
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;
