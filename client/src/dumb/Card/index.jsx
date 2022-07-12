import React, { useEffect, useState } from "react";
import StyledText from "../../styledComponents/StyledText";
import BathIcon from "../Icons/Bath";
import RoomIcon from "../Icons/Room";
import AreaIcon from "../Icons/Area";
import { StyledLinkCard } from "../../styledComponents/StyledLink";
import { DivRow } from "../../styledComponents/DivRow";
import Button from "../../styledComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import house from "../../assets/house.png";
import apartment from "../../assets/apartment.png";
import SetToFavortie from "../../components/SetToFavorite";
import capitalize from "../../functions/capitalize";
import { deleteProp } from '../../redux/actions';
import LoginController from "../../localStorage/login";

const Card = ({
  _id,
  user,
  address,
  city,
  area,
  type,
  rooms,
  status,
  bathrooms,
  price,
  operation,
  pictures,
  neighbourhood
}) => {

  //const range = localStorage.getItem('range');
  const headers = LoginController()
  const dispatch = useDispatch();

  const handleElim = (e) =>{
    dispatch(deleteProp(headers, _id));
    
  }

  return (
    <>
      <StyledLinkCard to={`/${_id}`}>
        <img
          src={
            pictures[0] ||
            (type.toLowerCase().includes("casa") ? house : apartment)
          }
        />
        <DivRow justCont="space-between">
          <DivRow>
            <h2>$ {price} USD</h2>
            <StyledText className="operationCard">
              {operation === "rent" ? "En alquiler" : "En venta"}
            </StyledText>
          </DivRow>
        </DivRow>
        <DivRow>
          <StyledText className="typeCard">{capitalize(type)}</StyledText>
        </DivRow>
        <div>
          <h4>{capitalize(address)}</h4>
        </div>
        <div>
          <h3>{capitalize(city)} — {capitalize(neighbourhood)}</h3>
        </div>
        <DivRow alignIt="baseline">
          <aside>
            <h5>
              <AreaIcon /> {area}m2
            </h5>
          </aside>
          <aside>
            <h5>
              <RoomIcon /> {rooms} hab
            </h5>
          </aside>
          <aside>
            <h5>
              <BathIcon /> {bathrooms} baños
            </h5>
          </aside>
        </DivRow>
      </StyledLinkCard>
        <div>
      <blockquote>
        <StyledText status={status} className="statusCard">
          {status === "available" ? "Disponible" : "Destacada" }
        </StyledText>
      </blockquote>
      </div>
      
      {user._id && (
        <SetToFavortie idProperty={_id} user={user} top="252px" right="2px" />
      )}

      {
        user.range === 'premium' && (
          <div>
            <Button onClick={handleElim}>Suspender Prop</Button>

            <Button onClick={handleElim}>Ver denuncias</Button>
          </div>
          
        )
      }
    </>
  );
};

export default Card;
