import React from 'react'
import Cards from '../../components/Cards'
import CardsContainer from '../../styledComponents/CardsContainer'
import StyledCard from '../../styledComponents/StyledCard'
import Filter from '../../components/Filters'

const Home = () => {
  return (

    <div>
      <div>
        Aquí Navbar
      </div>
      <div>
        <div className='LeftPanel'>
          <Filter/>
        </div>
        <CardsContainer>
            <Cards/>
        </CardsContainer>
      </div>      
    </div>
  )
}

export default Home