import React, { useEffect, useState } from "react";
import styles from '../CardFavorito/CardFav.module.css';
import StyledText from '../../styledComponents/StyledText';
import BathIcon from '../Icons/Bath';
import RoomIcon from '../Icons/Room';
import AreaIcon from '../Icons/Area';
import Button from '../../styledComponents/Button';
import { StyledLink } from '../../styledComponents/StyledLink';
import { DivRow } from "../../styledComponents/DivRow";
import SetToFavortie from "../../components/SetToFavorite";
import { getUserById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import house from '../../assets/house.png'
import apartment from '../../assets/apartment.png'
import capitalize from './../../functions/capitalize';

export default function CardCart({ _id, user, operation, type, address, price, city, area, rooms, bathrooms, pictures, neighbourhood }) {

    const handleConectar = (e) => { };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contenedorFav}>
                <div className={styles.divFotos}>
                    <img src={pictures[0] || (type.toLowerCase().includes('casa') ? house : apartment) }/>
                </div>
                <div className={styles.divCaracteristicas}>
                    <h2> $ {price} USD </h2>
                    {operation === 'sell' ? 'En venta' : 'En alquiler'}
                    <DivRow>
                        <StyledText className='typeCard'>{capitalize(type)}</StyledText>
                    </DivRow>
                    <h4>
                        {capitalize(address)}  —  {capitalize(neighbourhood)}  —  {capitalize(city)}
                    </h4>
                    <h5>
                        <AreaIcon /> {area}m2
                        <RoomIcon /> {rooms} hab
                        <BathIcon /> {bathrooms} baños
                    </h5>
                </div>
                <div className={styles.divBotones}>
                    <Button >
                        <StyledLink to={`/${_id}`}>
                            Ver detalle
                        </StyledLink>
                    </Button>

                    <SetToFavortie idProperty={_id} user={user} />
                </div>

            </div>
        </div>
    )
}