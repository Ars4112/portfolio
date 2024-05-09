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
								рандомного числа лайков и комментариев + подгрузка этого числа
								комментариев в публикации, наложение фильтров на фотографию,
								валидация формы, добавление новых комментариев под фото.
							</dd>
						</dl>
						<Link href={"#"}>github</Link>
					</ItemWrapper>
				</Item>
			</List>
		</SliderContainer>
	);
}

const SliderContainer = styled.div`
	width: min(1440px, 100%);
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
	width: min(1160px, 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`;

const ItemWrapper = styled.div`
	font-family: "Noto Sans", sans-serif;
	color: #272526;
	display: grid;
	grid-template-columns: 1fr 1fr auto;
	grid-template-rows: repeat(2, auto);
	gap: 40px 30px;

	& h3 {
		font-weight: 600;
		font-size: 4.38rem;
		line-height: 71%;
    }

	& dt {
		font-weight: 600;
		font-size: 1.25rem;
		line-height: 150%;
	}

	& a {
		grid-column: 3/4;
		grid-row: 1 / span 2;
		align-self: self-start;
	}
`;
