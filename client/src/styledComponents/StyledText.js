import styled from 'styled-components'

const StyledText = styled.div`
    /* background-color: azure; */
    border-radius: 30px;
    border: 1.5px solid #E52F50;
    z-index: 1;
    
    &.typeCard {
        padding: 0 6px 1px 6px;
    }

    &.statusCard {
        color: #fff;
        background-color: #E52F50;
        padding: 0px 4px 0px 4px;
        position: relative;
        margin-right: 4px;
        top: -39px;
    }

    &.statusDetail {
        margin-top: 22px;
        background-color: #E52F50;
        color: #fff;
        padding: 9px 30px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        /* justify-content: center; */
        min-width: 110px;
        max-width:140px;
    }

    &.operationCard {
        font-weight: 400;
        padding: 0px 5px 0px 5px;
        border: 2px solid #999;
        background-color: #999;
        color: #eeeeee;
        margin-left: 6px;
    }

    &.operationDetail {
        border:none;
        margin-top: 22px;
        background-color: #999;
        color: #fff;
        padding: 11px 30px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        min-width: 100px;
        max-width:180px;
    }
`
export default StyledText