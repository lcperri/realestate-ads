import React, { useEffect, useState } from "react";
import styles from './CardFav.module.css';
import StyledText from '../../styledComponents/StyledText';
import BathIcon from '../Icons/Bath';
import RoomIcon from '../Icons/Room';
import AreaIcon from '../Icons/Area';
import Button from '../../styledComponents/Button';
import { StyledLink } from '../../styledComponents/StyledLink';
import { DivRow } from "../../styledComponents/DivRow";

export default function CardFavorito({ id, type, address, price, city, area, rooms, bathrooms, pictures, neighbourhood }) {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const handleConectar = (e) => { };
    const handleElim = (e) => { };

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item);
    };

    const handelRotationRight = () => {
        const totalLength = property.pictures.length;
        if (currentIndex + 1 >= totalLength) {
          setCurrentIndex(0);
          const newUrl = property.pictures[0];
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = property.pictures.filter((item) => {
          return property.pictures.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };
    
      const handelRotationLeft = () => {
        const totalLength = property.pictures.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = property.pictures[totalLength - 1];
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = property.pictures.filter((item) => {
          return property.pictures.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };

    return (
        <div className={styles.contenedorFav}>

            <div className={styles.divFotos} onClick={() => handleClick(pictures[0],0)}>
                <img src={pictures[0]} alt={"not found"} className={styles.foto} />
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