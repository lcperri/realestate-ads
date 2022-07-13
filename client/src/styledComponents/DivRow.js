import styled from "styled-components";

export const DivRow = styled.div`
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: row;
    color: ${props => props.color || '#333'};
    flex: ${props => props.flexWrap};
    justify-content: ${props => props.justCont};
    align-items: ${props => props.alignIt || 'center'};
    padding: ${props => props.padding};
    margin: ${props => props.margin}; 
    gap: ${props => props.gap || '4px'};
    width: ${props => props.width};
    height: ${props => props.height};

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
