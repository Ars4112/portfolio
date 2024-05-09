import styled from "styled-components";
import { Container } from "./Container";
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
				<h2>Образование</h2>
				<Table>
					<tr>
						<th>2021-2022 </th>
					</tr>
					<tr>
						<td>HTML ACADEMY</td>
						<td>“Профессия Frontend разработчик”</td>
					</tr>
					<tr>
						<th>2023</th>
					</tr>
					<tr>
						<td>Самостоятельное обучение</td>
						<td>React и TypeScript</td>
					</tr>
					<tr>
						<th>2024</th>
					</tr>
					<tr>
						<td>IT-Kamasutra</td>
						<td>“Frontend разработчик”</td>
					</tr>
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

const EducationContainer = styled(Container)`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: auto;
	justify-content: space-between;
	gap: 50px;

	& > img {
		position: sticky;
		top: 100px;
		object-fit: contain;
		justify-self: self-end;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 40px;

	& h2 {
		font-family: "Noto Sans", sans-serif;
		font-weight: 600;
		font-size: 20px;
		line-height: 150%;
	}

	& p {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
`;

const Table = styled.table`
	text-align: left;
	table-layout: fixed;

	& tr:not(:first-of-type) th {
		padding-top: 35px;
	}

	& td {
		vertical-align: top;

		&:first-child {
			padding-right: 30px;
		}
	}
	& th {
		vertical-align: top;
		font-weight: 400;
	}
`;
