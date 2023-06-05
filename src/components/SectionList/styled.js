import styled from "styled-components"
import { modelH2 } from "../../styles/globalStyle.js"

export const StyleDivContainer = styled.div`
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
   

    h2{
        ${modelH2}
    }
`