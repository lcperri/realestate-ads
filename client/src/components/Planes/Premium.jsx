import React from 'react'
import DivContainer from '../../styledComponents/DivContainer'
import { DivRow } from '../../styledComponents/DivRow'
import features from '../../assets/features.png'
import Title from '../../styledComponents/Title'
import Button from '../../styledComponents/Button'

const Premium = () => {
    return (
        <DivContainer padding='40px 40px 40px 40px' margin='40px' className='plansCard'>
            <DivRow justCont='center'>
                <Title color='#FF416C'>PREMIUM</Title>
            </DivRow>
            {/* <div> */}
                <DivRow gap='16px'>
                    <img src={features} /><p>ARS 1.500 al mes.</p>
                </DivRow>
                <DivRow gap='16px'>
                    <img src={features} /><p>3 publicaciones mensuales.</p>
                </DivRow>
                <DivRow gap='16px'>
                    <img src={features} /><p className="descripcion-plan">Cancela cuando quieras.</p>
                </DivRow>
            {/* </div> */}
            {/* <div> */}
                <Button margin='20px 0 0 0'>
                    ¡Lo quiero!
                </Button>
            {/* </div> */}
        </DivContainer>
    )
}

export default Premium