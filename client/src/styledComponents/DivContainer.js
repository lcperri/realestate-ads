import styled from "styled-components";

const DivContainer = styled.div`
  border-radius: 20px;
  margin: 140px auto 15px auto;
  padding: 20px 60px 30px 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 18px;
  transition: .2s ease all;

  ${(props) => props.home ? 'min-width: 100rem; min-height: 58rem; width: 75%; height: 75%;' : 
    'width: 75%;'
  }

  &.contactForm {
    /* margin: 20px auto 15px auto; */
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    height: 610px;
    width: 80%;
    background-color: #FAFAFA;
  }
  
  &.plansCard {
    max-width: 320px;
    min-width: 140px;
    background-color: #fff;
  }

  &.create {
    margin: 60px auto 15px auto;
    padding: 30px 40px 32px 40px;
    background-color: #fff;
  }

  &.login {
    margin: 60px auto 15px auto;
    padding: 30px 250px 32px 40px;
    width: 55%;
  }

  &.grid {
    display: grid;
    grid-template-columns: 35% 65%;
    transition: width 2s;
  }

  
  &.detail {
    background-color: #fff;
    border: 1px solid #efefef;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.159);
    width: 70%;
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

  aside {
    padding-right: 10px;
  }
`;
export default DivContainer;


