import styled from 'styled-components'

const StyledTextTwo = styled.span`
    /* padding: 0 5px 0 5px; */
    border-radius: 30px;
    /* border: 1px solid #E52F50; */
    background-color: #444;
    color: #fff;
    
    &.available {
        background-color: #E52F50;
        padding: 9px 13px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        min-width: 110px;
        max-width:140px;
        width: 50%;
    }
`
export default StyledTextTwo