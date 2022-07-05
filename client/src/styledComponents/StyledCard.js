import styled from 'styled-components'

const StyledCard = styled.div`
  position: relative;
  background-color: #fff;
  cursor: pointer;
  min-height: 15rem;
  align-items: flex-start;
  display: flex;
  flex-direction: column; 
  padding: 1px 1px 15px 1px;
  border-radius: 1rem;
  border: 1px solid #efefef;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 300px;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
  }

  div {
    padding: 2px 0 2px 6px;
  }

  blockquote {
    position: absolute;
    top: -425px;
    left: 5px;
  }

  * {
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
  }
  
  &:hover {
    margin-top: -3px;
    margin-bottom: 6px;
  }

`
export default StyledCard