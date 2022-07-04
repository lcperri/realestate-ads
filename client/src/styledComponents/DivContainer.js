import styled from "styled-components";

const DivContainer = styled.div`
  /* cursor: pointer; */
  /* min-height: 15rem; */
  background-color: #fff;
  border-radius: 20px;
  width: 75%;
  margin: 120px auto 15px auto;
  padding: 20px 60px 30px 60px;
  /* gap:2px; */
  /* align-items: flex-start; */
  /* display: flex; */
  /* flex-direction: column;  */
  /* padding: 1px 1px 0 1px; */
  /* border-radius: 1rem; */
  /* border: 1px solid #efefef; */
  /* box-shadow: 0 3px 15px rgba(0, 0, 0, 0.159); */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 18px;
  /* width: max-content; */
  &.create {
    margin: 60px auto 15px auto;
    padding: 30px 40px 32px 40px;
  }
  
  &.detail {
    background-color: #fff;
    border: 1px solid #efefef;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.159);
  }

  &.home {
    /* E52F50 */
    background: #BA5370;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF416C 0%, #ff765e 100%); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(0deg, #FF416C 0%, #ff765e 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin-left: 350px;
  }

  &.calendaris {
    /* E52F50 */
    background: #BA5370;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF416C 0%, #ff765e 100%); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(0deg, #FF416C 0%, #ff765e 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin-left: 240px;
  }

  div {
    margin: 1.3px 0 1.5px 0;
  }
`;
export default DivContainer;
