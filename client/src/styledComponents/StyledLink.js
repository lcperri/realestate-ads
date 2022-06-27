import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color:#444;
    }
    &:link {
        color:#444;
    }
    /* &:hover {
        border: 2px solid #E52F50;
    } */
`
export default StyledLink