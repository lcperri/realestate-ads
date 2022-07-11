import styled from "styled-components";

export const DivRow = styled.div`
    /* background-color: aqua; */
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justCont};
    align-items: ${props => props.alignIt || 'center'};
    padding: ${props => props.padding};
    margin: ${props => props.margin || '122px'}; 
    gap: ${props => props.gap || '4px'};    

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
