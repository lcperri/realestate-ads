import styled from "styled-components";

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justCont};
    align-items: ${props => props.alignIt || 'center'};
    padding: ${props => props.padding}; 
`
