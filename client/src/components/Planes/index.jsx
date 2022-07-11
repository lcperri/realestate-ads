import React from "react";
import { DivRow } from "../../styledComponents/DivRow";
import { Title } from "../../styledComponents/FiltersStyles";
import './planes.css';
import Premium from "./Premium";
import Vip from "./Vip";
import capitalize from '../../functions/capitalize'
import Button from '../../styledComponents/Button'
import BackButton from '../../dumb/BackButton'

export default function Planes() {
    const range = localStorage.getItem('range')

    return (
        <div className="bodyPlanes">
            <div className="subWrapper">
                <Title fSize='24px' color='#fff'>VENDE O ALQUILA TU PROPIEDAD EN TIEMPO RECORD</Title>
                {range === 'free' && <>
                    <Title margin='60px 0 0 0'>¡Suscribite para publicar!</Title>
                    <DivRow alignIt='space-between' justCont='space-between'>
                        <Premium />
                        <Vip />
                    </DivRow>
                    <h2>Tu subscripción actual es: {capitalize(range)}</h2>
                </>}
                {range === 'premium' && <>
                    <Title margin='60px 0 0 0'>¡Actualiza a VIP y obtén mayores beneficios!</Title>
                    <DivRow justCont='center'>
                        <Vip />
                    </DivRow>
                    <h2>Tu subscripción actual es: {capitalize(range)}</h2>
                    <Button className='planes' margin='20px 0 0 0' to='/#'>Cancelar subscripción</Button>
                </>}
                {range === 'vip' && <>
                    <Title margin='60px 0 0 0'>¡Tu cuenta está con los máximos beneficios. Continúa disfrutando de ella!</Title>
                    <DivRow justCont='center' padding='70px'>
                        <BackButton>{'<'}</BackButton>
                    </DivRow>
                    <h2>Tu subscripción actual es: {capitalize(range)}</h2>   
                    <Button className='planes' margin='20px 0 0 0' to='/#' onClick={()=> alert('voy a pasarela')}>
                        Bajar a premium
                    </Button>
                    <Button className='planes' margin='10px 0 0 0' to='/#'>Cancelar subscripción</Button>
                </>}
            </div>
        </div>
    )
}