import styled from "styled-components";

export const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justCont};
    align-items: ${props => props.alignIt || 'center'};
    padding: ${props => props.padding};
    gap: ${props => props.gap};
`
