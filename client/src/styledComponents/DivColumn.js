import styled from "styled-components";

export const DivColumn = styled.div`
    background-color: ${props => props.bgColor};
    border: ${props => props.border};
    border-radius: ${props => props.bRadius};
    display: flex;
    flex-direction: column;
    font-size: ${props => props.fontSize}; 
    justify-content: ${props => props.justCont};
    align-items: ${props => props.alignIt || 'center'};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    gap: ${props => props.gap};
    color: ${props => props.color};
    padding: ${props => props.padding};
    width: ${props => props.width || '100%'};


`
