import styled from 'styled-components'

const Title = styled.div`
    color: ${props => props.color || '#fff'};
    margin: ${props => props.margin || '0 auto'};
    font-size: ${props => props.fontSize || '26px'};
    font-weight: 600;
`
export default Title