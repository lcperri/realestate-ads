import React from "react";
import styles from './CardFav.module.css';
import StyledText from '../../styledComponents/StyledText';
import BathIcon from '../Icons/Bath';
import RoomIcon from '../Icons/Room';
import AreaIcon from '../Icons/Area';
import Button from '../../styledComponents/Button';
import { StyledLink } from '../../styledComponents/StyledLink';
import { useParams } from "react-router-dom";
import { DivRow } from "../../styledComponents/DivRow";

export default function CardFavorito({ id, type, address, price, city, area, rooms, bathrooms, pictures, neighbourhood }) {

    const handleConectar = (e) => { };
    const handleElim = (e) => { };

    return (
        <div className={styles.contenedorFav}>

            <div className={styles.divFotos}>
                <img src={pictures} alt={"not found"} className={styles.foto} />
            </div>

            <div className={styles.divCaracteristicas}>
                <div>
                    <h2>
                        $ {price} USD
                    </h2>
                </div>

                <DivRow>
                    <div className={styles.typo}>
                        <StyledText className='typeCard'>{type}</StyledText>
                    </div>
                </DivRow>

                <div className={styles.direcc}>
                    <h4>{address} {neighbourhood} - {city}</h4>
                </div>

                <div className={styles.areaRoomBath}>
                    <h5>
                        <AreaIcon /> {area}m2
                        <RoomIcon /> {rooms} hab
                        <BathIcon /> {bathrooms} baños
                    </h5>
                </div>
            </div>

            <div className={styles.divBotones}>
                <Button className={styles.botonConetar} onClick={handleConectar}>
                    <StyledLink to='/contact'>
                        Solicitar Contacto
                    </StyledLink>
                </Button>

                <StyledLink to={`/${id}`}> {/*62b7e86c0c65fc9fbc1e18e7*/}
                    <Button className={styles.botonDet}>Ver detalle</Button>
                </StyledLink>

                <Button className={styles.botonQuitar} onClick={handleElim}>Quitar de favoritos</Button>
            </div>

        </div>
    )
}