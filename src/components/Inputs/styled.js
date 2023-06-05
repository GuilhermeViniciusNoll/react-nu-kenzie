import styled from "styled-components"
import { modelLabel, modelPlaceholder, modelParagraph } from "../../styles/globalStyle.js"

export const StyleDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px 10px;
    
    label{
        ${modelLabel}
    }

    input{
        width: 100%;
        height: 3.3rem;
        padding: 0px 16px;
        border: solid 2px var(--colorGrey4);
        border-radius: 8px;
        ${modelPlaceholder}
        color: var(--colorGrey1);
        background-color: var(--colorGrey4);
    }

    input::placeholder{
        ${modelPlaceholder}
    }

    input:focus{
        background-color: var(--colorWhite);
        border: solid 2px var(--colorGrey1);
    }

    p{
        ${modelParagraph}
    }

`