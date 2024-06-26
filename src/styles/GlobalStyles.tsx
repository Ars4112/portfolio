import { createGlobalStyle } from "styled-components";
import DelaGothicOneRegularWoff2 from "../fonts/DelaGothicOne-Regular.woff2";
import DelaGothicOneRegularTTF from "../fonts/DelaGothicOne-Regular.ttf";
import NotoSansCondensedRegularWoff2 from "../fonts/NotoSansCondensed-Regular.woff2";
import NotoSansCondensedRegularTTF from "../fonts/NotoSans_Condensed-Regular.ttf";
import NotoSansCondensedSemiBoldTTF from "../fonts/NotoSans_Condensed-SemiBold.ttf";
import NotoSansCondensedSemiBoldWoff2 from "../fonts/NotoSansCondensed-SemiBold.woff2";

export const GlobalStyles = createGlobalStyle<{menuOpen: boolean}>`
@font-face {
  font-family: "Dela Gothic One";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${DelaGothicOneRegularWoff2}) format("woff2"), url(${DelaGothicOneRegularTTF}) format("truetype");
}

@font-face {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${NotoSansCondensedRegularWoff2}) format("woff2"), url(${NotoSansCondensedRegularTTF}) format("truetype");
}

@font-face {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(${NotoSansCondensedSemiBoldWoff2}) format("woff2"), url(${NotoSansCondensedSemiBoldTTF}) format("truetype");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: min(16px, calc(10px + 6 * (100vw - 768px) / 672));

  @media (max-width: 768px) {
    font-size: min(16px, calc(10px + 6 * (100vw - 375px) / 393));
	}

  @media (max-width: 375px) {
    font-size: 12px;
	}
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  
}

body {
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 139%;
  color: #272526;
  background-color: #dbba8f;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: ${(props)=> props.menuOpen ? "hidden" : "none"};
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

dl, dd, p {
  margin: 0;
}
`;
