import styled from 'styled-components'

const DivContainer = styled.div`
  /* cursor: pointer; */
  /* min-height: 15rem; */
  border-radius: 20px;
  margin: 14px auto;
  width: 75%;
  margin: 15px auto;
  padding: 20px 60px 30px 60px;
  /* gap:2px; */
  /* align-items: flex-start; */
  /* display: flex; */
  /* flex-direction: column;  */
  /* padding: 1px 1px 0 1px; */
  /* border-radius: 1rem; */
  border: 1px solid #efefef;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.159);
  /* width: max-content; */
  
  &.home {
    /* E52F50 */
    background: #BA5370;  /* fallback for old browsers */
    /* #fdfcfb */
    /* #e2d1c3 */
    background: -webkit-linear-gradient(to right, #ffc3a0            , #ec637c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffc3a0           , #ec637c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin-left: 350px;
  }
  /* img {
    width: 300px;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
  } */

  div {
    margin: 5px 0 8px 0;
  }

`
export default DivContainer