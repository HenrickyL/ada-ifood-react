import styled from "styled-components";

export const ProductDetailsStyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 5rem 2rem;
    height: 100%;

    @media (min-width: 100px) and (max-width: 400px){
        padding: 5rem 2rem;
    }
`


export const ProductDetailsSty = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    font-weight: bold;
    span{
        font-size: 24px;
    }

    img{
        border-radius: 8px;
        border: 1px solid ${prop=>prop.theme.contrast};
        width: 28rem;
    }

    svg{
        cursor: pointer;
    }

    @media (min-width: 100px) and (max-width: 400px){
        flex-wrap: wrap;
        img{
            width: 20rem;
        }
    }
`