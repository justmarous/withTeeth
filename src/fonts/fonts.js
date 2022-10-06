import { createGlobalStyle } from "styled-components";

import Armata from "./Armata/Armata-Regular.ttf";
import Koulen from "./Koulen/Koulen-Regular.ttf";
import PressStart2P from "./Press_Start_2P/PressStart2P-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${Armata}) format('ttf'),
        url(${Koulen}) format('ttf'),
        url(${PressStart2P}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
