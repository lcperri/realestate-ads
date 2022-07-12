import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CardMisPropsPV.module.css";
import StyledText from "../../styledComponents/StyledText";
//import DivContainer from '../../styledComponents/'
import BathIcon from "../Icons/Bath";
import RoomIcon from "../Icons/Room";
import AreaIcon from "../Icons/Area";
import Button from "../../styledComponents/Button";
import { StyledLink } from "../../styledComponents/StyledLink";
import capitalize from "./../../functions/capitalize";
import Shopping from "../Icons/Shopping";
import AddToCart from "../../components/AddToCart";
import { getUserById } from "../../redux/actions";

export default function CardMisPropPremiumVip({
  user,
  idProperty,
  type,
  address,
  price,
  area,
  rooms,
  bathrooms,
  pictures,
  status,
}) {
  return (
    <div className={styles.contenedorMP}>
      <div className={styles.divFotos}>
        <img src={pictures} alt={"not found"} className={styles.foto} />
      </div>
      <div className={styles.divCaracteristicas}>
        <div>
          <h2>$ {price} USD</h2>
        </div>

        <div className={styles.typo}>
          <StyledText className="typeCard">{capitalize(type)}</StyledText>
        </div>

        <div className={styles.direcc}>
          <h4>{capitalize(address)}</h4>
        </div>

        <div className={styles.areaRoomBath}>
          <h5>
            <AreaIcon /> {area}m2
            <RoomIcon /> {rooms} hab
            <BathIcon /> {bathrooms} baños
          </h5>
        </div>
        {(status === "available" || status === "invisible") && (
          <AddToCart
            user={user}
            idProperty={idProperty}
            top="-40px"
            right="-310px"
            hover="green"
          />
        )}
      </div>
      <div className={styles.divBotones}>
        {/* <p className={styles.visto}>Visto:</p>
        <p>Marcado Favorito: </p> */}
        <Button className={styles.botonConetar}>
          <StyledLink to={`/contacto/${idProperty}`}>
            Ver solicitudes de contacto
          </StyledLink>
        </Button>
        <Button className={styles.botonConetar}>
        <StyledLink to={`/${idProperty}`}>
            Ver detalle
          </StyledLink>
        </Button>
        {/* <Button className={styles.botonQuitar}>
          Rentado/Vendido/Reservado
        </Button> */}
      </div>
    </div>
  );
}
