import styled from 'styled-components'

const Button = styled.button`
    background: #E52F50;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 10px;
    border: 2px solid #E52F50;
    font-weight: 500;
    border-radius: 30px;
    &:hover {
        background-color: #fff;
        color: #444;
        border: 2px solid #E52F50;
    }

    &.type {
        background: #E52F50;
        color: #fff;
        border: 1px solid #E52F50;
        padding: 0px 4px 0px 4px;
        /* position: relative; */
        margin: 0;
        /* top: -263px; */
        /* left: -60px; */
        width: auto;
        /* cursor: default; */
        &:hover {
            background-color: #E52F50;
            /* color: #333; */
        }
    }

    &.center {
        margin: 0 auto;
        
        /* &:hover {
            background-color: #E52F50;
        } */
    }

    &.disabled {
        background-color: #666;
    }
`
export default Button