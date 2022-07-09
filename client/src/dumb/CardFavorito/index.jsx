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

export default function CardFavorito({ _id, type, address, price, city, area, rooms, bathrooms, pictures, neighbourhood }) {

    const handleConectar = (e) => { };
    const handleElim = (e) => {
       
    };

    return (
        <div className={styles.contenedorFav}>

            <div className={styles.divFotos}>
                <img src={pictures} alt={"not found"} className={styles.foto} />
            </div>

            <div className={styles.divCaracteristicas}>
                <div>
                    <h2 className={styles.Precio}>
                        $ {price} USD
                    </h2>
                </div>

                <DivRow>
                    <div>
                        <h3 className={styles.typeCard}>{type}</h3>
                    </div>
                </DivRow>

                <div>
                    <h3  className={styles.direcc}>{address} - {neighbourhood} - {city}</h3>
                </div>

                <div>
                    <h3 className={styles.direcc}>
                        <AreaIcon /> {area}m2
                        <RoomIcon /> {rooms} hab
                        <BathIcon /> {bathrooms} baños
                    </h3>
                </div>
            </div>

            <div className={styles.divBotones}>
                
                    <StyledLink to='/contact'>
                        <Button className={styles.botonContacto} onClick={handleConectar}>
                           Solicitar Contacto
                        </Button>
                    </StyledLink>
                

                <StyledLink to={`/${_id}`}> {/*62b7e86c0c65fc9fbc1e18e7*/}
                    <Button className={styles.botonDet}>Ver detalle</Button>
                </StyledLink>

                <Button className={styles.botonQuitar} onClick={handleElim}>Quitar de favoritos</Button>
            </div>

        </div>
    )
}