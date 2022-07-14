import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByCart,
  filterByFollower,
  filterByOwner,
  getUserById,
  propertyPagination,
} from "../../redux/actions";
import CardsContainer from "../../styledComponents/CardsContainer";
import Card from "../../dumb/Card";
import Pagination from "../Pagination";
import CardMisPropsPremiumVip from "../../dumb/CardMisPropsPremiumVip";
import Favorito from "../../dumb/CardFavorito";
import StyledCard from "../../styledComponents/StyledCard";
import LoginController from "./../../localStorage/login";
import CardCart from "../../dumb/CardCart";
import Loader from "../../pages/Loader/index";
import { DivColumn } from "../../styledComponents/DivColumn";

const Cards = ({ id, favourites, cart }) => {
  const dispatch = useDispatch();
  const headers = LoginController();
  const properties = useSelector((state) => state.properties);
  const pages = useSelector((state) => state.pages);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.user);
  const updateCurrentPage = useSelector((state) => state.updateCurrentPage);
  const userId = localStorage.getItem("id");

  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, []);

  useEffect(() => {
    if (
      !id &&
      !favourites &&
      !cart &&
      filter.location !== undefined &&
      filter.max !== undefined
    ) {
      dispatch(propertyPagination(filter));
    } else if (
      id &&
      filter.location !== undefined &&
      filter.max !== undefined
    ) {
      dispatch(filterByOwner(filter, id, headers));
    } else if (
      favourites &&
      filter.location !== undefined &&
      filter.max !== undefined
    ) {
      dispatch(filterByFollower(filter, favourites, headers));
    } else if (cart) dispatch(filterByCart(userId, headers));
  }, [filter, updateCurrentPage]);

  return (
    <DivColumn gap='20px'>
      <CardsContainer margin='140px auto 40px auto'>
        {id
          ? properties &&
          properties
            .slice(pages[1] - 1, pages[2])
            .map((e) => (
              <CardMisPropsPremiumVip
                user={user}
                key={e.id}
                idProperty={e._id}
                type={e.type}
                address={e.address}
                price={e.price}
                area={e.area}
                rooms={e.rooms}
                bathrooms={e.bathrooms}
                pictures={e.pictures[0]}
                status={e.status}
              />
            ))
          : favourites
            ? properties &&
            properties
              .slice(pages[1] - 1, pages[2])
              .map((e) => (
                <Favorito key={e.id} userId={user._id} user={user} {...e} />
              ))
            : cart
              ? properties &&
              properties
                .slice(pages[1] - 1, pages[2])
                .map((e) => <CardCart key={e.id} user={user} {...e} />)
              : properties &&
                properties.slice(pages[1] - 1, pages[2]).map((e) => (
                  <StyledCard key={e._id}>
                    <Card key={e.id} user={user} {...e} />
                  </StyledCard>
                ))}
          <Pagination></Pagination>
          </CardsContainer>
        </>
    </>
  );
};

export default Cards;
