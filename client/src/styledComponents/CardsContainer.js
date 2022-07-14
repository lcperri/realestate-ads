import styled from 'styled-components'

const CardsContainer = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: none;
    margin: ${props => props.margin};
    justify-content: center;
    gap: 25px;
    padding-top: 4px;

    @media (max-width: 768px) {
      gap: 2px;
      padding: 4px;
      margin: 0;
    }
  `
export default CardsContainer