import styled from "styled-components";


interface ListStyProps{
    isHorizontal?: boolean
}
export const ListSty = styled.div<ListStyProps>`
    display: flex;
    flex-direction:  ${prop=>prop.isHorizontal ? 'column': 'row'};
    gap: 1rem;
    border-radius: 8px;
    width: 100%;
    ${prop=>
        prop.isHorizontal ?
            `overflow-y: auto; overflow-x: hidden;`:
            `overflow-x: auto; overflow-y: hidden;`
    }
    padding: 1rem;

`