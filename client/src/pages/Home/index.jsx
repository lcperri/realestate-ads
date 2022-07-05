import { useEffect } from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { clear } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clear());
  });

  return (
    <div>
      <div className={styles.homeWrapper}>
        <div>
          <Filter />
        </div>
        {/* <Loader /> */}
        <DivContainer home={true} className="home">
          <CardsContainer>
            <Cards />
          </CardsContainer>
        </DivContainer>
      </div>
    </div>
  );
};

export default Home;
