import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
    --colorPrimary: #FD377E;
    --colorPrimary2: #E34981;
    --colorSecondary: #03B898;
    
    --colorGrey1: #212529;
    --colorGrey2: #868E96;
    --colorGrey3: #E9ECEF;
    --colorGrey4: #F8F9FA;
    --colorWhite: #FFFFFF;

    --fontFamily: "Nunito", sans-serif;

    --fontSize1:2.375rem;
    --fontSize2:1.375rem;
    --fontSize3:1rem;
    --fontSize4:.75rem;

    --weight1:800;
    --weight2:700;
    --weight3:600;
    --weight4:400;

    --lineHeight1:48px;
    --lineHeight2:34px;
    --lineHeight3:30px;
    --lineHeight4:26px;
    --lineHeight5:22px;
}
`

export const modelH1 = css`
    font-size: var(--fontSize1);
    font-weight: var(--weight1);
    line-height: var(--lineHeight1);
    color: var(--colorGrey1);
`

export const modelH2 = css`
    font-size: var(--fontSize2);
    font-weight: var(--weight2);
    line-height: var(--lineHeight2);
    color: var(--colorGrey1);
`

export const modelH3 = css`
    font-size: var(--fontSize3);
    font-weight: var(--weight2);
    line-height: var(--lineHeight3);
    color: var(--colorGrey1); 
`

export const modelLabel = css`
    font-size: var(--fontSize4);
    font-weight: var(--weight3);
    line-height: var(--lineHeight4);
    color: var(--colorGrey1);
`

export const modelParagraph = css`
    font-size: var(--fontSize4);
    font-weight: var(--weight4);
    line-height: var(--lineHeight5);
    color: var(--colorGrey1);
`

export const modelPlaceholder = css`
    font-size: 1rem;
    font-weight: var(--weight4);
    line-height: var(--lineHeight4);
    color: var(--colorGrey2);
`

