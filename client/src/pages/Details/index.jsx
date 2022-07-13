import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaIcon from "../../dumb/Icons/Area";
import BathIcon from "../../dumb/Icons/Bath";
import RoomIcon from "../../dumb/Icons/Room";
import BuildIcon from "../../dumb/Icons/Build";
import TypeIcon from "../../dumb/Icons/Type";
import RenovationIcon from "../../dumb/Icons/Renovation";
import DivContainer from "../../styledComponents/DivContainer";
import ParkingIcon from "../../dumb/Icons/Parking";
import NeighborhoodIcon from "../../dumb/Icons/Neighborhood";
import GalleryDetails from "../../styledComponents/GalleryDetails";
import GalleryDetailsContainer from "../../styledComponents/GalleryDetailsContainer";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import StyledText from "../../styledComponents/StyledText";
import Map from "../../libs/Map";
import Button from "../../styledComponents/Button";
import styles from "./styles.module.css";
import { getownersphone, GetUserById, switchBetweenForms } from "../../redux/actions";
import { getPropertyById, clear } from "../../redux/actions";
import getCoordenates from "../../functions/getCoordenates";
import FormContacto from "../../components/FormContacto";
import { DivRow } from "../../styledComponents/DivRow";
import { DivColumn } from "../../styledComponents/DivColumn";
import { StyledLink } from "../../styledComponents/StyledLink";
import BackButton from "../../dumb/BackButton";
import capitalize from "../../functions/capitalize";
import house from '../../assets/house.png'
import apartment from '../../assets/apartment.png'
import Calendar from "../../libs/CalendarPost";
import Reviews from "../../dumb/Reviews";
import PostComments from "../../components/PostComments";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormDenuncia from "../../components/FormDenuncia";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [coordenate, setCoordenate] = useState();

  const property = useSelector((state) => state.property);
  const form = useSelector((state) => state.forms);
  const userId = localStorage.getItem('id')
  const { id } = useParams(); //id de propiedad

  useEffect(() => {
    dispatch(switchBetweenForms());
    dispatch(getPropertyById(id));
    return () => dispatch(clear());
  }, []);

  useEffect(() => {
    dispatch(getPropertyById(id));
  }, [form])

  useEffect(() => {
    getCoordenates(property.address + " " + property.city)
      .then((data) => setCoordenate(data))
      .catch((err) => console.log(err));
  }, [property]);

  useEffect(() => {
    dispatch(getownersphone(id));
  }, [id]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handelRotationRight = () => {
    const totalLength = property.pictures.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = property.pictures[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = property.pictures.filter((item) => {
      return property.pictures.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = property.pictures.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = property.pictures[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = property.pictures.filter((item) => {
      return property.pictures.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  
  const handleDenuncia = () => {
    Swal(navigate(`/formDenuncia/${id}`));
  };

  return (
    <div className={styles.bodyDetails}>
      <DivContainer className="detail">
        <h1>Imágenes:</h1>
        <GalleryDetailsContainer>
          {property.pictures?.length > 0
            ? property.pictures.map((e, index) => (
              <GalleryDetails key={e}>
                <img
                  src={e === '' ? property.type.toLowerCase().includes('casa') ? house : apartment : e}
                  onClick={() => handleClick(e, index)}
                />
              </GalleryDetails>
            ))
            : <img src={property.type === 'Casa' ? house : apartment} />
          }
        </GalleryDetailsContainer>
        <DivRow padding='20px 0 0 0'>
          <StyledText className="operationDetail">
            {property.operation === "rent" ? "En alquiler" : "En venta"}
          </StyledText>
          <StyledText className="statusDetail">
            {property.status === "available" ? "Disponible" : "Reservado"}
          </StyledText>
        </DivRow>
        {/* <div className={styles.statusOperation}> */}
        {/* </div> */}
        <div className={styles.addresFeatures_contact_wrapper}>
          <div>
            <div className={styles.priceWrapper}>
              Desde: $
              {property.operation === "rent"
                ? ` ${property.price} USD/Mes ¡Alquílalo ahora!`
                : ` ${property.price} ¡Adquiérelo ahora!`}
            </div>
            <h1>Dirección:</h1>
            <div className={styles.container}>
              {capitalize(property.city)} <b> {` > `} </b> {capitalize(property.neighbourhood)}{" "}
              <b>{" > "}</b> {capitalize(property.address)}
            </div>
            <h1>Características:</h1>
            <div className={styles.features}>
              <div>
                <AreaIcon /> <h3>Área:</h3> {property.area}m2
              </div>
              <div>
                <TypeIcon /> <h3>Tipo:</h3>
                {capitalize(property.type)}
              </div>
              <div>
                <RoomIcon /> <h3>Nro de habitaciones:</h3> {property.rooms}
              </div>

              <div>
                <BathIcon /> <h3>Nro de baños:</h3>
                {property.bathrooms}
              </div>
              <div>
                <NeighborhoodIcon />
                <h3>Vecindario:</h3>
                {capitalize(property.neighbourhood)}
              </div>
              <div>
                <BuildIcon />
                <h3>Fecha de construcción:</h3>
                {property.constructionDate}
              </div>
              <div>
                <RenovationIcon />
                <h3>Fecha de renovación:</h3>
                {property.renovationDate}
              </div>
              <div>
                <ParkingIcon />
                <h3>Estacionamiento:</h3>
                {property.parkingSlot ? "Sí" : "No"}
              </div>
            </div>
          </div>
          <div className={styles.contact_subWrapper}>
            { !userId
              ? <div>
                  <h4>
                    Te gusta esta propiedad?
                    No pierdas la oportunidad de {property.operation === 'rent' ? 'alquilarla.' : 'adquirirla.'} <br />
                    Inicia sesión o regístrate gratis para comunicarte con el propietario.
                  </h4>
                  <DivRow padding='10px 10px 10px 10px' justCont='center'>
                    <StyledLink to='/sesion' url={id}>
                      <Button>
                        Iniciar sesión
                      </Button>
                    </StyledLink>
                    <StyledLink color='#3e4b56' to='/registro' >
                      registrarse
                    </StyledLink>
                  </DivRow>
                </div>
              :
                form === false || form === undefined 
                ? <FormContacto /> 
                : form === true && <Calendar operation={property?.operation} />
            }
          </div>
        </div>
        <h1>Ubicación:</h1>
        <Map address={coordenate} />
        <h1>Opiniones:</h1>
        {
          property.comments?.map(e => 
            <Reviews key={e.id} {...e} />
          )
        }
        <DivColumn padding="30px 0 0 0" justCont='flex-start'>
          <PostComments/>
        </DivColumn>
        <div>          
            <Button className={styles.btnDenunciar} onClick={handleDenuncia}>Denunciar Publicación</Button>
        </div>
      </DivContainer>
      <div className={styles.btnContainer}>
        <Button onClick={() => navigate("/home", { replace: true })}>
          Volver
        </Button>
      </div>
      <div className={styles.btnBackTop}>
        <BackButton />
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
};

export default Details;
