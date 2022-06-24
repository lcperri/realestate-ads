import React from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import StyledCard from "../../styledComponents/StyledCard";
import Filter from "../../components/Filters";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <div className="LeftPanel">
          <Filter />
        </div>
        <CardsContainer>
          <Cards />
        </CardsContainer>
      </div>
    </div>
  );
};

export default Home;
