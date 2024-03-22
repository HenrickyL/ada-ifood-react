import styled from "styled-components";

export const CartProductContainer = styled.table`
    border-collapse: collapse;
    border-radius: 8px;
    background-color: ${prop=>prop.theme.backgroundSnd};
`
export const CartProductItem = styled.tr`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${prop=>prop.theme.contrastLight};
    transition: 0.3s;
    filter: brightness(0.90);

    &:hover{
        filter: brightness(1);
    }

    &:last-child{
        border-bottom: none;
    }

    td:nth-child(2){
        width: 20rem;
    }

    td{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        padding: 4px 8px;
        font-weight: bold;
        img{
            width: 4rem;
        }
    }

    td:last-child{
        
        gap: 4px;
        span{
            width: 1rem;
            text-align: center;
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${prop=>prop.theme.secondary};
            border: 2px solid ${prop=>prop.theme.contrastLight};

            border-radius:8px;
            font-size: 16px;
            width: 20px;
            height: 20px;
            transition: 0.3s;
            &:hover{
            border: 2px solid ${prop=>prop.theme.contrast};
            background-color: ${prop=>prop.theme.primary};
            }
        }
    }
`
export const CartValues = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    div{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
        width: 100%;
    }

    button{
        background-color: ${prop=>prop.theme.secondary};
        font-weight: bold;
        padding: 8px;
        border-radius: 8px;
        border: 2px solid ${prop=>prop.theme.contrastLight};
        transition: 0.5s;


        &:hover{
            border: 2px solid ${prop=>prop.theme.contrast};
            background-color: ${prop=>prop.theme.primary};
        }
    }


`
export const CartSty = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
`