import styled from 'styled-components'

const StyledCard = styled.div`
  cursor: pointer;
  min-height: 15rem;
  margin: 14px;
  gap:2px;
  align-items: flex-start;
  display: flex;
  flex-direction: column; 
  padding: 1px 1px 0 1px;
  border-radius: 1rem;
  border: 1px solid #efefef;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  object-fit: cover;
  
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
    position: relative;
    top: -342px;
    left: 5px;
  }

  * {
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
  }
  
  &:hover {
    margin-top: 8px;
    margin-bottom: 20px;
  }

`
export default StyledCard