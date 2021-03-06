import styled from 'styled-components'

const StyledCard = styled.div`
  position: relative;
  background-color: #fff;
  cursor: pointer;
  min-height: 15rem;
  align-items: flex-start;
  display: flex;
  flex-direction: column; 
  padding: 0px 0px 15px 0px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* z-index: 2; */

  img {
    width: 300px;
    height: 240px;
    object-fit: cover;
    border-radius: 20px;
  }

  div {
    padding: 2px 0 2px 6px;
  }

  blockquote {
    position: absolute;
    top: -440px;
    left: 5px;
  }
  
  &:hover {
    transition: all .2s;
    -webkit-transition: all .2s;
    margin: -4px 0 6px 0;
  }

  transition: all .2s;
`
export default StyledCard