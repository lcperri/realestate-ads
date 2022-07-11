import styled from 'styled-components'

const StyledText = styled.div`
    border-radius: 30px;
    border: 1.5px solid #E52F50;
    z-index: 1;
    
    &.typeCard {
        padding: 0 6px 1px 6px;
    }

    &.statusCard {
        ${props => props.status === 'available' ? "background-color: #E52F50;" : "background-color: green;" }
        color: #fff;
        padding: 0px 4px 0px 4px;
        margin-right: 4px;
        margin-top:  32rem;
    }

    &.statusDetail {
        align-items: center;
        border:none;
        background-color: #E52F50;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        padding: 8px 12px;
    }

    &.operationCard {
        font-weight: 400;
        padding: 0px 5px 0px 5px;
        border: 2px solid #999;
        background-color: #999;
        color: #fff;
        margin-left: 6px;
    }

    &.operationDetail {
        align-items: center;
        border:none;
        background-color: #999;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        padding: 8px 12px;
    }
`
export default StyledText