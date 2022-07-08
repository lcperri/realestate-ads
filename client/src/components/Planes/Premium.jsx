import React from 'react'
import DivContainer from '../../styledComponents/DivContainer'
import Title from '../../styledComponents/Title'

const Premium = () => {
    return (
        <DivContainer className='plansCard'>
            <div>
                <Title color='#FF416C'>PREMIUM</Title> 
                <p>350 USD al mes</p>
                <p>2 publicaciones</p>
                <p>Descripción:</p>
            </div>
        </DivContainer>
    )
}

export default Premium