import styled from 'styled-components'

const Title = styled.div`
    color: ${props => props.color || '#fff'};
    font-size: ${props => props.fontSize || '26px'};
    font-weight: 600;
    margin: 0 auto;
`
export default Title