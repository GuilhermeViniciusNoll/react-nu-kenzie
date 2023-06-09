import styled from "styled-components"
import { modelH2, modelParagraph } from "../../styles/globalStyle.js"

export const StyleDivContainer = styled.div`
    
    width: 100%;
    height: auto;
    min-height: 6rem;
    border: solid 1px var(--colorGrey3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 15px;
    margin-bottom: 25px;

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    div > h2{
        ${modelH2}
    }

    .value{
        color: var(--colorPrimary);
    }

    p{
        ${modelParagraph}
    }
`