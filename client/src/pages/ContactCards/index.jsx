import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import {
  clear,
  getownersphone,
  getPropertyById,
  getUserById,
  seeContactsByProperty,
  switchBetweenForms,
} from "../../redux/actions";
import LoginController from "../../localStorage/login";
import { useParams } from "react-router-dom";
import ContactCard from "../../dumb/CardContact";
import styles from "./styles.module.css";
import { DivRow } from "../../styledComponents/DivRow";
import { StyledLink } from "../../styledComponents/StyledLink";
import Button from "../../styledComponents/Button";
import FormContacto from "../../components/FormContacto";
import Calendar from "../../libs/CalendarPost";

export default function ContactCards() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const headers = LoginController();
  const form = useSelector((state) => state.forms);
  const { id } = useParams();
  const property = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(switchBetweenForms());
    dispatch(getPropertyById(id));
    return () => dispatch(clear());
  }, []);

  useEffect(() => {
    dispatch(getUserById(userId, headers));
  }, []);

  useEffect(() => {
    dispatch(getownersphone(id));
  }, [id]);

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <DivContainer className="calendaris">
        <div className={styles.contact_subWrapper}>
          {form === false || form === undefined ? (
            <FormContacto />
          ) : (
            form === true && <Calendar operation={property?.operation} />
          )}
        </div>
      </DivContainer>
    </>
  );
}
