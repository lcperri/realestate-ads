import { useEffect } from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Loader from "../../pages/Loader";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { clear, GetUserById } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const userId = localStorage.getItem('id')
  useEffect(() => {
    dispatch(GetUserById(userId))
  },[]);
  console.log(user)

  useEffect(() => {
    // dispatch(dispatch(getFavorites))
    return () => dispatch(clear());
  }, []);

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
