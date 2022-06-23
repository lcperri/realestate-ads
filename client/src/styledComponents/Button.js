import styled from 'styled-components'

const Button = styled.button`
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 10px;
    border: 2px solid #E52F50;
    font-weight: 500;
    border-radius: 30px;
    &:hover {
        background-color: #E52F50;
        color: #fff;
        /* background: linear-gradient(45deg, #A3278F 0%, #E52F50 100%); */
        /* border: 2px solid #E52F50; */
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
`
export default Button