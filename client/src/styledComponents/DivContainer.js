import styled from "styled-components";

const DivContainer = styled.div`
  border-radius: 20px;
  margin: ${props => props.margin || '140px auto 15px auto'};
  padding: ${props => props.padding || '20px 60px 30px 60px'};
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 18px; */
  transition: .2s ease all;
  width: ${props => props.width};
  gap: ${props => props.gap || '2px'};

  ${(props) => props.home ? 'min-width: 100rem; min-height: 58rem; width: 75%; height: 75%;' : 
    'width: 75%;'
  }

  &.calendarPost {
    padding: 0 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 550px;
    width: 100%;
  }

  &.contactForm {
    padding: 0 35px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    min-height: 550px;
    width: 100%;
  }
  
  &.plansCard {
    background-color: #fff;
    max-width: 280px;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 8px;
    cursor: pointer;
    &:hover {
      margin: 34px 40px 46px 40px;
    }
    /* align-items: space-between; */

    img {
      height: 22px;
      width: 22px;
    }
  }

  &.create {
    margin: 60px auto 15px auto;
    padding: 30px 40px 32px 40px;
    background-color: #fff;
  }

  &.createPicture {
    margin: 60px auto 15px auto;
    padding: 30px 40px 32px 40px;
    background-color: #fff;
    width: 1200px;
  }

  &.login {
    margin: 35px auto 15px auto;
    padding: 30px 60px 32px 60px;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    width: 70%;

  }

  &.home {
    /* E52F50 */
    /* background: #BA5370; 
    background: -webkit-linear-gradient(to right, #FF416C 0%, #ff765e 100%);
    background: linear-gradient(0deg, #FF416C 0%, #ff765e 100%); */
    margin-left: 350px;
  }

  &.calendaris {
    /* background: #BA5370; 
    background: -webkit-linear-gradient(to right, #FF416C 0%, #ff765e 100%); 
    background: linear-gradient(0deg, #FF416C 0%, #ff765e 100%); */
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


