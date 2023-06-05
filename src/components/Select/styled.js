import styled from "styled-components"

export const StyleDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px 10px;
    
    label{
        
    }

    select{
       background-color: var(--colorGrey4);
       border: solid 1.2px var(--colorGrey4);
       border-radius: 8px;
       width: 100%;
       height: 3rem;
       padding: 0px 16px;
    }

    select:hover{
        border: solid 1.2px var(--colorGrey1)
    }

`