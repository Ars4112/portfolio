import styled from "styled-components";

import photo from "../assets/img/photo-2.jpg";

export function Education() {
	return (
		<EducationContainer>
			<img
				src={photo}
				alt="Нафоне картины Бенкси"
				width={"290"}
				height={"301"}
			/>

			<Wrapper>
				<h3>Образование</h3>
				<Table>
					<thead>
						<tr>
							<th>2021-2022 </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>HTML ACADEMY</td>
							<td>“Профессия Frontend разработчик”</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th>2023</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Самостоятельное обучение</td>
							<td>React и TypeScript</td>
						</tr>
					</tbody>

					<thead>
						<tr>
							<th>2024</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>IT-Kamasutra</td>
							<td>“Frontend разработчик”</td>
						</tr>
					</tbody>
				</Table>
				<p>
					<span>
						Я&nbsp;обладаю богатым профессиональным опытом, пробовал себя
						в&nbsp;разных сферах. Когда-то учился на&nbsp;медбрата, работал
						ассистентом стоматолога, фитнес-инструктором, администратором,
						служил в&nbsp;МЧС и&nbsp;был сварщиком на&nbsp;производствах
						и&nbsp;в&nbsp;строительстве. Этот опыт позволяет мне понимать
						&laquo;внутреннюю кухню&raquo; в&nbsp;разных сферах&nbsp;&mdash; что
						позволяет мне лучше понимать бизнес-потребность заказчика.
					</span>

					<span>
						Для меня важно расти профессионально и&nbsp;развиваться. Поэтому
						я&nbsp;решил кардинально сменить сферу и&nbsp;начал самостоятельное
						обучение frontend разработке.
					</span>

					<span>
						Мне нравится видеть результаты своей работы и чувствовать себя
						частью важного проекта, который помогает людям.
					</span>
				</p>
			</Wrapper>
		</EducationContainer>
	);
}

const EducationContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: auto;
	justify-content: space-between;

	& > img {
		position: sticky;
		top: 100px;
		object-fit: contain;
		justify-self: self-end;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2.5rem;

		& > img {
			position: static;
			width: 100%;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 9.06rem;
	gap: 1.56rem;

	& > p {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	& h3 {
		font-weight: 600;
		font-size: 24px;
		line-height: 31px;
	}

	@media (max-width: 768px) {
		padding-left: 0;
	}
`;

const Table = styled.table`
	text-align: left;
	table-layout: fixed;

	& thead:not(:first-of-type) th {
		padding-top: min(10px, calc(5px + 5 * (100vw - 768px) / 672));
	}

	& td {
		vertical-align: top;

		&:first-child {
			padding-right: min(30px, calc(10px + 20 * (100vw - 768px) / 672));
		}
	}
	& th {
		vertical-align: top;
		font-weight: 400;
	}
`;
