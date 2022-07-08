import React from 'react'
import DivContainer from '../../styledComponents/DivContainer'
import Title from '../../styledComponents/Title'

const Vip = () => {
    return (
        <DivContainer className='plansCard'>
            <div>
                <Title color='#FF416C'>VIP </Title>
                <p className="descripcion-plan">200 USD al mes</p>
                <p className="descripcion-plan">Publicaciones Ilimitadas</p>
                <p className="descripcion-plan">Descripción:</p>
            </div>
        </DivContainer>
    )
}

export default Vip