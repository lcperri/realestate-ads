import React from 'react'
import DivContainer from '../../styledComponents/DivContainer'
import Title from '../../styledComponents/Title'
import features from '../../assets/features.png'
import { DivRow } from '../../styledComponents/DivRow'
import Button from '../../styledComponents/Button'

const Vip = () => {
    return (
        <DivContainer padding='20px 40px 20px 40px' margin='40px' className='plansCard'>
            <DivRow justCont='center'>
                <Title color='#FF416C'>VIP </Title>
            </DivRow>
            <DivRow gap='16px'>
                <img src={features} /><p className="descripcion-plan">ARS 20.000 al mes.</p>
            </DivRow>
            <DivRow gap='16px'>
                <img src={features} /><p className="descripcion-plan">Publicaciones mensuales ilimitadas.</p>
            </DivRow>
            <DivRow gap='16px'>
                <img src={features} /><p className="descripcion-plan">Mayor visibilidad.</p>
            </DivRow>
            <DivRow gap='16px'>
                <img src={features} /><p className="descripcion-plan">Cancela cuando quieras.</p>
            </DivRow>
            <Button margin='20px 0 0 0'>
                <div>¡Lo quiero!</div>
            </Button>
        </DivContainer>
    )
}

export default Vip