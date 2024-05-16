import styled from "styled-components";
import { SwitchStyle } from "./SwitchStyle";
import { SpanHidden } from "../SpanHidden";

export function SwitchGroup() {
	return (
		<Group>
			<SwitchStyle aria-label="переключения языков">
				<li>
					<button>
						<SpanHidden>Русский</SpanHidden>
						<span aria-hidden>Ru</span>
					</button>
				</li>
				<li>
					<button>
						<SpanHidden>Английский</SpanHidden>
						<span aria-hidden>En</span>
					</button>
				</li>
			</SwitchStyle>
			<SwitchStyle aria-label="переключения темы">
				<li>
					<button>
						<SpanHidden>светлая тема</SpanHidden>
						<span aria-hidden>Light</span>
					</button>
				</li>
				<li>
					<button>
						<SpanHidden>темная тема</SpanHidden>
						<span aria-hidden>Dark</span>
					</button>
				</li>
			</SwitchStyle>
		</Group>
	);
}

const Group = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: end;
	justify-items: end;
	gap: 1.56rem;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}
`;