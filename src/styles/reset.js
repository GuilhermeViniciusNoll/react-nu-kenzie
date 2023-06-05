import { createGlobalStyle } from "styled-components"

export const ResetStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: var(--fontFamily);
} 

ul{
    list-style: none;
}

button{
    cursor: pointer;
}

html,
body{
    width:99vw ;
    height: auto;
    overflow-x: hidden;
    margin-bottom: 35px;
}
`