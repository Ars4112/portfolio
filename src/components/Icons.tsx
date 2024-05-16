import styled from "styled-components";
import sprite from "../assets/img/svg/sprite.svg";

type PropsTypeIcon = {
	spriteId: string;
	size: string;
};

export function Icons(props: PropsTypeIcon) {
	return (
		<Svg width={props.size} height={props.size} viewBox="0 0 90 90">
			<use
				xlinkHref={`${sprite}#${props.spriteId}`}
			/>
		</Svg>
	);
}

const Svg = styled.svg`
    & use {
        transform: translate(6%, 6%); 
    }
`;
