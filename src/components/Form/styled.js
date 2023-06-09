import styled from "styled-components"
import { modelH2 } from "../../styles/globalStyle.js"

export const StyleFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 15px;
    width: 100%;
    border: 1px solid var(--colorGrey2);
    padding: 25px 0px;
    margin: 0px 0px 25px;
    
    
    button{
    width: auto;
    margin: 15px 10px;
    height: 3rem;
    border: solid 2px var(--colorPrimary);
    border-radius: 8px;
    background-color: var(--colorPrimary);
    ${modelH2}
    color: var(--colorWhite);
    }

    button:hover{
        background-color: var(--colorPrimary2);
    }
`