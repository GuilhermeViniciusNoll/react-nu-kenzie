import { styled, css } from "styled-components"
import { modelH2, modelParagraph } from "../../styles/globalStyle.js"

export const StyleLiContainer = styled.li`

    ${({ type }) => {
        if (type === "Entrada") {
            return css`
            border-left: solid 4px var(--colorSecondary);
            `
        } else {
            return css`
            border-left: solid 4px var(--colorGrey3);
            `
        }
    }}

    border-radius: 4px;
    background-color:var(--colorGrey4);
    margin: 20px 0px ;
    padding: 10px 15px;
    width: 100%;
    min-height: 87px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;

    div{
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 15px;
    }

    .containerItem{
        align-items: start;
    }

    div > h2{
        ${modelH2}
    }

    div > p{
        ${modelParagraph}
    }
    
    div > button{
        ${modelParagraph}
        width: 100%;
        max-width: 49px;
        background-color: var(--colorGrey3);
        color: var(--colorGrey1);
        border: none;
        border-radius: 2px;
    }

    div > button:hover{
        background-color: var(--colorGrey1);
        color: var(--colorGrey3);

    }
`