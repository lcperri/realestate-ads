import styled from 'styled-components'

const CardsContainer = styled.div`
    /* position: sticky; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${props => props.bgColor || 'none'};
    margin: ${props => props.margin};
    justify-content: center;
    gap: 25px;
    padding-top: 4px;
    
    &.denuncias {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 18px;
      border-radius: 20px;
      background-color: #fff;
      /* margin: 140px auto 40px auto; */
      display: grid;
      flex-direction: row;
      flex-wrap: wrap;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 30px;
      width: 70%;
      min-height: 440px;
    }


    @media (max-width: 768px) {
      gap: 2px;
      padding: 4px;
      margin: 0;
    }
  `
export default CardsContainer