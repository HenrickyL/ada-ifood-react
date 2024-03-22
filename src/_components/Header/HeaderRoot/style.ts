import styled from "styled-components";

export const HeaderRootSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${prop=>prop.theme.backgroundSnd};
    padding: 4px 8px;
    overflow-y: hidden;
    max-height: 4rem;
`