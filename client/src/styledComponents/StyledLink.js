import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        border: 2px solid #E52F50;
    }
`
export default StyledLink