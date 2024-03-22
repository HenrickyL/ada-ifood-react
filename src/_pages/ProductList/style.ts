import styled from "styled-components";

export const ProductListSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    main{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        overflow-y: auto;
        max-height: 40rem;
        flex-wrap: wrap;
        /* grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); */
        gap: 20px;
        padding: 1rem;
    }
`