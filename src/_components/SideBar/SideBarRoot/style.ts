import styled from "styled-components";

export const SideBarRootSty = styled.nav`
    position: relative;
    z-index: 3;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    height: 100%;
    background: ${prop=>prop.theme.backgroundSnd || '#2f363e'};
    box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
        10px 10px 70px rgba(0,0,0,0.25),
        inset 5px 5px 10px rgba(0,0,0,0.5),
        inset 5px 5px 20px rgba(255,255,255,0.2),
        inset -5px -5px 15px rgba(0,0,0,0.75);
`