import React from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Nav from "../../components/Nav";
import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from './styles.module.css'

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={styles.homeWrapper}>
        <div>
          <Filter />
        </div>
        {/* <Loader /> */}
        <DivContainer className="home">
          <CardsContainer>
            <Cards />
          </CardsContainer>
        </DivContainer>
      </div>
    </div>
  );
};

export default Home;
