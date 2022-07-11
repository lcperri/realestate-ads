import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 13.5px;
    padding: 4px;
    margin: ${props => props.margin};

    &.perfil {
        color: #fff;
        background-color: #3e4b56;
        border-radius: 20px;
        padding: 3px 8px;
        &:visited {
            color:#fff;
        }
        &:link {
            color:#fff;
        }
        &:hover {
            color:#E52F50;
        }
    }

    &:visited {
        color:#fff;
    }
    &:hover {
        font-weight: bolder;
        color:#ff765e;
    }
    &:link {
        color:#ff765e;
    }
`

export const StyledHash = styled(HashLink)`
    color: #fff;
    text-decoration: none;
    font-size: 13.5px;    
    &:visited {
        color:#fff;
    }
    &:link {
        color:#fff;
    }
    &:hover {
        color: #ff765e;
    }
`
export const StyledLinkCard = styled(Link)`
    color: #333;
    text-decoration: none;
    font-size: 15px;    
    &:visited {
        color:#333;
    }
    &:link {
        color:#333;
    }
    /* &:hover {
        border: 2px solid #E52F50;
    } */
`