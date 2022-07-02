import styled from 'styled-components'

const Input = styled.input`
    /* background: #E52F50; */
    color: #666;
    font-size: 18px;
    padding: 9px;
    border-radius: 10px;
    border: 2px solid #999;
    font-weight: 500;
    &.addressCreateForm {
        width: 82%;
    }

    &:hover {
        color: #444;
        border: 2px solid #ff765e;
    }
`
export default Input