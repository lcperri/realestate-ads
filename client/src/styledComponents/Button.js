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

    &.paginationHome {
        background-color: #fff;
        border: 4px solid #ff765e;
        color: #333;
        margin-right: 6px;
        &:hover {
        background-color: #E52F50;
        color: #fff;
        border: 4px solid #E52F50;
    }
    }

    &.btnBackTopDetail {
        font-size: 24px;
        border-radius: 100%;
    }

    &.status {
        padding: 0px 4px 0px 4px;
        position: relative;
        margin-right: 4px;
        top: -89px;
        /* left: -60px; */
        width: auto;
    }

    &.operation {
        padding: 0px 4px 0px 4px;
        border: 2px solid #999;
        background-color: #999;
        color: #fff;
        position: relative;
        margin: 0;
        top: -89px;
        /* left: -60px; */
        width: auto;
        /* cursor: default; */
        &:hover {
            background-color: #E52F50;
            /* color: #333; */
        }
    }

    &.submitCreateForm {
        height: 45px;
        /* line-height: 45px; */
        width: 30%;
        background-color: #000;
        color: #fff;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: .1s ease all;

        &:hover {
            box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
        }
    }

    &:disabled {
        background-color: #E3E3E3;
        color: #999;
        border: 2px solid transparent;
    }
`
export default Button