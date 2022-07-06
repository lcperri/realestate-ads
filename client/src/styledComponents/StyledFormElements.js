import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'

const Label = styled.label`
    /* background: #E52F50; */
    display: block;
    color: #666;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0;
    min-height: 40px;
    cursor: pointer;

    ${(props) => props.valid === 'false' && css`
        color: red;
    `}
    ${(props) => props.valid === 'true' && css`
        color: #333;
    `}
`
const Input = styled.input`
    background: #fff;
    color: #666;
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    padding: 9px 35px 9px 9px;
    border-radius: 10px;
    border: 2px solid #999;
    font-weight: 500;
    transition: .3s ease all;

    &:focus-within {
        &.controlLabel {
            color: #FFDF74;
        }
        color: #444;
        border: 2px solid #FFDF74;
        outline: none;
        box-shadow: 3px 0px 20px rgba(163, 163, 163, 0.4);
    }

    ${(props) => props.valid === 'false' && css`
        border: 2px solid red !important;
    `}
    ${(props) => props.valid === 'true' && css`
        border: 2px solid #444;
        color: #333;
    `}
`
const GrupoInput = styled.div`
    /* background-color: black; */
    position:relative;
    z-index: 90;
    &.addressCreateForm {
        input { width: 100%;}
    }
    &.operationCreateForm {
        width: 76%;
    }
    
`
const GrupoSelect = styled.div`
    /* background-color: black; */
    position:relative;
    z-index: 90;

    &.adjustOperationSelect {
        width: 85%;
        select {
            width: 107%;
        }
    }
    &.adjustCocheraSelect {
        width: 95%;
        select {
            width: 105%;
        }
    }
`

const Option = styled.option`
    color: #444;
    font-size: 16px;
    font-weight: 500;
`
const Select = styled.select`
    color: #444;
    font-size: 16px;
    padding: 9.2px;
    border: 2px solid #999;
    font-weight: 500;
    border-radius: 10px;
    &:hover {
        color: #555;
        border: 2px solid #ff765e;
    }

    ${(props) => props.valid === 'false' && css`
        border: 2px solid red !important;
    `}
    ${(props) => props.valid === 'true' && css`
        border: 2px solid #333 !important;
    `}
`
const ErrorLeyend = styled.p`
    padding: 3px 2px 0px 2px;
    font-size: 12px;
    margin-bottom: 0;
    color: red;
    /* display: none; */
    ${(props) => props.valid === 'false' 
        ? css`display: block;`
        : css`display: none;`
    }
`
const ValidationIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 12px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;
    height:20px;

    ${(props) => props.valid === 'false' &&
        css`opacity: 1; color: #FF2222;`
    }
    ${(props) => props.valid === 'true' &&
        css`opacity: 1; color: #444;`
    }
`
const TermsAndConditions = styled.div`
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    background-color: azure;
    grid-column: span 2;
    margin: 40px auto;
    input {
        margin-right: 10px;
    }
    label {
        font-size: 16px;
    }
`
const SubmitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    padding-bottom: 40px;
`
const MensajeExito = styled.p`
    padding: 12px;
    font-size: 16px;
`
const MensajeError = styled.p`
    height: 55px;
    line-height: 55px;
    background-color: #fff;
    /* #F66060; */
    padding: 0 15px;
    /* border: 2px solid white; */
    margin: 20px auto;
    border-radius: 20px;
    grid-column: span 2;
    p {
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
`

export { 
    Label,
    Input, 
    GrupoInput,
    GrupoSelect,
    Option, 
    Select, 
    ErrorLeyend, 
    ValidationIcon, 
    TermsAndConditions, 
    SubmitContainer, 
    MensajeError, 
    MensajeExito 
}