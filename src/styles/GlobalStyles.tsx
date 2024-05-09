import { createGlobalStyle } from "styled-components";
import DelaGothicOneRegularWoff2 from "../fonts/DelaGothicOne-Regular.woff2";
import DelaGothicOneRegularTTF from "../fonts/DelaGothicOne-Regular.ttf";
import NotoSansCondensedRegularWoff2 from "../fonts/NotoSansCondensed-Regular.woff2";
import NotoSansCondensedRegularTTF from "../fonts/NotoSans_Condensed-Regular.ttf";
import NotoSansCondensedSemiBoldTTF from "../fonts/NotoSans_Condensed-SemiBold.ttf";
import NotoSansCondensedSemiBoldWoff2 from "../fonts/NotoSansCondensed-SemiBold.woff2";

export const GlobalStyles = createGlobalStyle`
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
  /* font-size: calc(1vw / 1); */
  /* font-size: min(16px, calc(1vw / 0.52)); */
  font-size: 16px;
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
  color: #272526;
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
