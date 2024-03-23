import styled from "styled-components";
export const ProductListPaginationContainer = styled.div``
interface ButtonProps{
    type: 'active'| 'default'
}
export const ProductListButton = styled.button<ButtonProps>`
    transition: 0.5s;
    background-color: ${prop=> prop.type == 'active' ? 
        prop.theme.primary : prop.theme.backgroundSnd};
`
export const ProductListSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    main{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        width: 100%;
        overflow-y: auto;
        max-height: 10rem;
        flex-wrap: wrap;
        /* grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); */
        gap: 20px;
        padding: 1rem;

        /* Para telas de smartphone */
        @media (min-height: 600px) {
            max-height: 34rem;
        }

        @media (min-height: 670px) and (max-height: 900px) {
            max-height: 36rem;
        }

        /* Para telas de 14 polegadas */
        @media (min-height: 900px) and (max-height: 1080px) {
            max-height: 48rem;
        }


        /* @media (min-height: 40in) {
            max-height: 60rem;
        } */
    }
    ${ProductListPaginationContainer}{
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;
    }

    ${ProductListButton}{
        border-radius:8px;
        border: 2px solid ${prop=>prop.theme.contrast};
        padding: 4px;
    }

`