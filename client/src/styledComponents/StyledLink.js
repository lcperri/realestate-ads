import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const StyledLink = styled(Link)`
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