import keksogram from "../../assets/img/slider/keksogram.jpg";
import logotype from "../../assets/img/slider/logotype.jpg";
import kruizy from "../../assets/img/slider/kruizy.jpg";
import device from "../../assets/img/slider/device.jpg";
import gym from "../../assets/img/slider/gym.jpg";

export const info: InfoType[] = [
	{
		id: 1,
		title: "Keksogram",
		subTitle: "Как Instagram. Только Keksogram и десктопное приложение",
		stack: "HTML, CSS, JS, Gulp, Webpack",
		description: `Загрузка фотографий, рандомный показ публикаций, генерация рандомного числа лайков комментариев + подгрузка этого числа комментариев публикации, наложение фильтров на фотографию, валидация формы, добавление новых комментариев под фото.`,
		img: keksogram,
	},
	{
		id: 2,
		title: "LogoType",
		subTitle: "Lifestyle блог с поиском статей по тегам",
		stack: "React,  Styled-Components, JS",
		description:
			"Запрос списка публикаций на сервере, вывод постов на главной странице, открытие модального окна с содержимым поста",
		img: logotype,
	},
	{
		id: 3,
		title: "Круизы",
		subTitle: "Сайт для заказа туров - южнее некуда",
		stack: "HTML, CSS, SASS, JS, Gulp, Webpack",
		description:
			"Адаптивная верстка, плавный скролл, валидация формы, настройка отображения функционала и контента при не загрузившихся скриптах.",
		img: kruizy,
	},
	{
		id: 4,
		title: "SuperGym",
		subTitle: "Фитнес-центра нового поберегиколения в Омске",
		stack: "HTML, CSS, SASS, JS, Gulp, Webpack",
		description:
			"Адаптивная верстка, слайдер и карусель, табы, валидация формы, настройка отображения функционала и контента при не загрузившихся скриптах.",
		img: gym,
	},
	{
		id: 5,
		title: "SmartDevice",
		subTitle: "Печатные платы в умные девайсы",
		stack: "HTML, CSS, SASS, JS, Gulp, Webpack",
		description:
			"Адаптивная верстка,плавный скролл, валидация формы, открытие модального окна, аккордеон, настройка отображения функционала и контента при не загрузившихся скриптах.",
		img: device,
	},
];

export type InfoType = {
	id: number;
	title: string;
	subTitle: string;
	stack: string;
	description: string;
	img: string;
};
