import styled from "styled-components";

export const HeaderRootSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${prop=>prop.theme.backgroundSnd};
    padding: 8px;
`