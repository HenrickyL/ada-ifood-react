import styled from "styled-components";

export const ProductListSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    main{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
        gap: 20px;
    }
`