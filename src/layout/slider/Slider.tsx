import styled from "styled-components";
import { SliderItem } from "./SliderItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { info } from "./projectInfo";

export function Slider() {
	return (
		<SliderContainer>
			<StyledSwiper
				spaceBetween={40}
				modules={[Navigation, Scrollbar]}
				navigation
				scrollbar={{ draggable: true }}
			>
				{info.map((i) => {
					return (
						<SwiperSlide key={i.id}>
							<SliderItem {...i} />
						</SwiperSlide>
					);
				})}
			</StyledSwiper>
		</SliderContainer>
	);
}

const SliderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
	.swiper-button-prev,
	.swiper-button-next {
		color: #fff;
		width: 40px;
		height: 40px;
		top: 17px;
		&::after {
			font-size: 20px;
		}

		@media (max-width: 768px) {
			display: none;
		}
	}

	.swiper-slide {
		padding: 40px 0 20px;

		@media (max-width: 768px) {
			padding: 0 0 20px;
		}
	}

	.swiper-horizontal > .swiper-scrollbar,
	.swiper-scrollbar.swiper-scrollbar-horizontal {
		bottom: 0;
	}
`;
