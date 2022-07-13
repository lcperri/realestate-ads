import { useEffect } from "react";
import DivContainer from "../../styledComponents/DivContainer";
import { DivRow } from "../../styledComponents/DivRow";
import features from "../../assets/features.png";
import Title from "../../styledComponents/Title";
import Button from "../../styledComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import { GetUserById, subscription } from "../../redux/actions";
import LoginController from "../../localStorage/login";

const Premium = () => {
  const id = localStorage.getItem("id");
  const headers = LoginController();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(GetUserById(id));
  }, []);

  const requestPremiumSubscription = (e) => {
    e.preventDefault();
    if (user?.email) {
      dispatch(
        subscription(
          {
            email: "test_user_9451359@testuser.com",
            reason: "Mikasa Nueva Premium",
            id
          },
          headers
        )
      );
    }
  };

  return (
    <DivContainer
      padding="40px 40px 40px 40px"
      margin="40px"
      className="plansCard"
    >
      <DivRow justCont="center">
        <Title color="#FF416C">PREMIUM</Title>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p>ARS 1.500 al mes.</p>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p>3 publicaciones mensuales.</p>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p className="descripcion-plan">Cancela cuando quieras.</p>
      </DivRow>
      <Button margin="20px 0 0 0" onClick={requestPremiumSubscription}>
        ¡Lo quiero!
      </Button>
    </DivContainer>
  );
};

export default Premium;
