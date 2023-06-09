import { styled, createGlobalStyle } from "styled-components"



export const StyleDivContainer = styled.div`
    width: 100%;
    max-width: 355px;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

`

export const StyleContainerMain = createGlobalStyle`
.container{
    width: 100%;
    display: flex;
    justify-content: center;
}

.subContainer, .subContainerHeader{
    width: 100%;
    max-width: 1000px;
    margin: 50px 15px;
    gap: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

@media (max-width: 959px){
    .subContainer{
        justify-content: center;
    }
}

`