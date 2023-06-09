import styled from "styled-components"

export const StyleUlContainer = styled.ul`
    width: 100%;
    height: auto;

    @media (max-width: 320px){
        li{
            display: flex;
            flex-direction: column;
            align-items: start;
        }
    }
`