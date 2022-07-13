import Filter from "../../components/Filters";
import Cards from "../../components/Cards";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clear, deleteLink, filterByCart, GetUserById, payment } from "../../redux/actions";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import LoginController from "../../localStorage/login";
import Button from "../../styledComponents/Button";
import styles from "./styles.module.css";


export default function Cart(){
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const headers = LoginController();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state => state.cart));

  useEffect(() => {
    dispatch(GetUserById(id));
    dispatch(filterByCart(id, headers));
    return () => dispatch(clear());
  }, []);


  const requestPurchase = (e) => {
    e.preventDefault();
    if (user?.email && cart?.length) {
      dispatch(
        payment(
          {
            email: "test_user_9451359@testuser.com",
            items: cart,
          },
          headers
        )
      );
    }
  };

  const link = useSelector((state) => state.link);    

  useEffect(() => {
    if (link?.length) {
        window.open(link);
        dispatch(deleteLink());
    }
  }, [link])

  return(      
    <div >
      <DivContainer home={true} className="home">
        {/* <Loader /> */}
        <CardsContainer>
          <Cards cart={id} />
        </CardsContainer>    
          
        <Button className={styles.btnDestacar} onClick={requestPurchase}>
          ¡Destacar todas por ARS {cart?.length*10000}!
        </Button>
      </DivContainer>
    </div>
  )
}