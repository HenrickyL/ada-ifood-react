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
        max-height: 34rem;
        flex-wrap: wrap;
        /* grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); */
        gap: 20px;
        padding: 1rem;

        @media (max-width: 14in) {
            max-height: 34rem;
        }

        @media (min-width: 14in) and (max-width: 22in) {
            max-height: 50rem;
        }

        @media (min-width: 22in) {
            max-height: 60rem;
        }
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