import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const StyledLink = styled(Link)`
    color: #ff765e;
    text-decoration: none;
    font-size: 15px;
    padding: 4px;

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
        color:#ff765e;
    }
    &:link {
        color:#ff765e;
    }
`

export const StyledHash = styled(HashLink)`
    color: #fff;
    text-decoration: none;
    font-size: 15px;    
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