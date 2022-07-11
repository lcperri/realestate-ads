import React from 'react'
import DivContainer from '../../styledComponents/DivContainer'
import Title from '../../styledComponents/Title'

const Vip = () => {
    return (
        <DivContainer className='plansCard'>
            <div>
                <Title color='#FF416C'>VIP </Title>
                <p className="descripcion-plan">ARS 20.000 al mes</p>
                <p className="descripcion-plan">Publicaciones Ilimitadas</p>
                <p className="descripcion-plan">Mayor visibilidad</p>
            </div>
        </DivContainer>
    )
}

export default Vip