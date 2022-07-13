import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormCreate.css";
import { createProperty, getUserById } from "../../redux/actions";
import DivContainer from "../../styledComponents/DivContainer";
import Cloudinary from "../../libs/Cloudinary";
import Button from "../../styledComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TermsAndConditions,
  SubmitContainer,
  MensajeError,
  Label,
} from "../../styledComponents/StyledFormElements";
import {
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";
import { regExps } from "../FormElements/regExpressions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Title from "../../styledComponents/Title";
// import { useDropzone } from 'react-dropzone'
import { DivRow } from '../../styledComponents/DivRow'
import { DivColumn } from '../../styledComponents/DivColumn'
import axios from "axios";
import { url } from "../../helpers/url";

export default function FormCreateProp() {

  const [missingUserData, setMissingUserData] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //para las cards:
  const [contador, setContador] = useState(0);
  const [errorsFirstCard, setErrorsFirstCard] = useState(true);
  const [errorsSecondCard, setErrorsSecondCard] = useState(true);
  const [errorsThirdCard, setErrorsThirdCard] = useState(true);

  // estados de cada input:
  const [city, setCity] = useState({ key: "", valid: null });
  const [neighbourhood, setneighbourhood] = useState({ key: "", valid: null });
  const [address, setAddress] = useState({ key: "", valid: null });
  const [price, setPrice] = useState({ key: "", valid: null });
  const [operation, setOperation] = useState({ key: "", valid: null });
  const [type, setType] = useState({ key: "", valid: null });
  const [area, setArea] = useState({ key: "", valid: null });
  const [rooms, setRooms] = useState({ key: "", valid: null });
  const [bathrooms, setBathrooms] = useState({ key: "", valid: null });
  const [parkingSlot, setParkingSlot] = useState({ key: "", valid: null });
  const [constructionDate, setConstructionDate] = useState({ key: "", valid: null });
  const [renovationDate, setRenovationDate] = useState({ key: "", valid: null });
  const [imagesPreview, setImagesPreview] = useState([]);
  const [pictures, setPictures] = useState([])
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [propertyCreated, setPropertyCreated] = useState(false);
  const [formOk, setFormOk] = useState(false);

  const user = useSelector(state => state.user)
  const userId = localStorage.getItem('id')

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])

  useEffect(() => {
    if (!user.email || user.email === 0 || user.email === '') setMissingUserData(prevState => [...prevState, 'Email'])
    if (!user.telephone || user.telephone === 0 || user.telephone === '') setMissingUserData(prevState => [...prevState, 'Teléfono'])
    if (!user.dni || user.dni === 0 || user.dni === '') setMissingUserData(prevState => [...prevState, 'Dni'])
  }, [user])

  useEffect(() => {
    setMissingUserData(new Set(missingUserData))
  }, [])

  //clean form
  const cleanForm = () => {
    setCity({ key: "", valid: null });
    setneighbourhood({ key: "", valid: null });
    setAddress({ key: "", valid: null });
    setPrice({ key: "", valid: null });
    setOperation({ key: "", valid: null });
    setType({ key: "", valid: null });
    setArea({ key: "", valid: null });
    setRooms({ key: "", valid: null });
    setBathrooms({ key: "", valid: null });
    setParkingSlot({ key: "", valid: null });
    setConstructionDate({ key: "", valid: "true" });
    setRenovationDate({ key: "", valid: "true" });
    setImagesPreview([]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setPropertyCreated(true);
    setTermsAndConditions(false);
    dispatch(
      createProperty({
        type: type.key,
        city: city.key.toLowerCase(),
        address: address.key.toLowerCase(),
        operation: operation.key,
        price: price.key,
        area: area.key,
        rooms: rooms.key,
        bathrooms: bathrooms.key,
        constructionDate: constructionDate.key,
        renovationDate: renovationDate.key,
        neighbourhood: neighbourhood.key.toLowerCase(),
        parkingSlot: parkingSlot.key,
        imagesPreview,
      })
    )
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Tu publicación fue creada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/mispropiedades");
        cleanForm();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo no salió bien. Por favor intenta nuevamente.",
        });
        navigate("/publicar");
      });
  };

  //Obteniendo imágenes de Cloudinary:
  const getImagesResultsCloudinary = (images) => {
    setImagesPreview([images]);
  };

  //habilita botones siguiente de cards:
  useEffect(() => {
    //1ra card
    if (
      city.valid === "true" &&
      neighbourhood.valid === "true" &&
      address.valid === "true"
    )
      setErrorsFirstCard(false);
    else setErrorsFirstCard(true);

    //2da card
    if (price.valid === "true" && operation.valid === "true")
      setErrorsSecondCard(false);
    else setErrorsSecondCard(true);

    //3ra card
    //valida campos obligatorios
    if (
      type.valid === "true" &&
      area.valid === "true" &&
      rooms.valid === "true" &&
      bathrooms.valid === "true" &&
      parkingSlot.valid === "true"
    )
      setErrorsThirdCard(false);
    else setErrorsThirdCard(true);

    //valida campos no obligatorios:
    if (constructionDate.valid === "false" || renovationDate.valid === "false")
      setErrorsThirdCard(true);
  }, [
    city,
    neighbourhood,
    address,
    price,
    operation,
    type,
    area,
    rooms,
    bathrooms,
    parkingSlot,
    constructionDate,
    renovationDate,
  ]);

  //términos y condiciones:
  const onChangeTerms = (e) => {
    setTermsAndConditions(e.target.checked);
  };

  const validateWithCreation = () => {
    if (constructionDate.key.length > 0) {
      if (parseInt(renovationDate.key) < parseInt(constructionDate.key)) {
        setRenovationDate((prevState) => {
          return {
            ...prevState,
            valid: "false",
          };
        });
      } else {
      }
    }
  };

  //valida todos los inputs y selects del form cuando hago click en términos:
  useEffect(() => {
    if (
      type.valid === "true" &&
      city.valid === "true" &&
      address.valid === "true" &&
      operation.valid === "true" &&
      price.valid === "true" &&
      area.valid === "true" &&
      rooms.valid === "true" &&
      bathrooms.valid === "true" &&
      neighbourhood.valid === "true" &&
      parkingSlot.valid === "true" &&
      // imagesPreview.valid === 'true' &&
      termsAndConditions === true
    )
      setFormOk(true);
    else setFormOk(false);
  }, [termsAndConditions]);

  return (
    <div className="bodyCreateProperty">
      <div className="form">
        <Title>PUBLICA TU INMUEBLE</Title>
        {missingUserData.length > 0
          ? <DivColumn>
            <Title color='#1f373d' fontSize='20px' margin='120px 0 80px 0'>
              Los siguientes datos no están registrados en tu cuenta:
              <DivColumn gap='20px' padding='20px 0' color='#fff'>
                <li>{ missingUserData[0] } </li>
                { missingUserData[0] !== missingUserData[1] && <li> { missingUserData[1] } </li> }
              </DivColumn>
            </Title>
            <div>
              Es importante para que te contacten y sepamos quién eres que registres correctamente dicha información. Será breve:
            </div>
            <DivRow gap='20px' margin='60px'>
              <Button onClick={() => navigate('/perfil')}>
                De acuerdo: Ir
              </Button>
              <Button onClick={() => navigate('/home')}>
                Tal vez mas tarde
              </Button>
            </DivRow>
          </DivColumn>
          : <form onSubmit={handleOnSubmit} id="form">
            {contador === 0 && (
              <DivContainer className="create">
                {/* <div className='subContainerCreate'> */}
                <div className="subTitle">Cuéntanos sobre su ubicación:</div>
                <div className="addressWrapper">
                  <Input
                    className="addressCreateForm"
                    name="Ciudad:"
                    type="text"
                    placeHolder="Ciudad"
                    errorLeyend={regExps.city.errorLeyend}
                    regExp={regExps.city.regExp}
                    state={city}
                    setState={setCity}
                  />
                  <Input
                    className="addressCreateForm"
                    name="Zona/Barrio:"
                    type="text"
                    placeHolder="Zona/Barrio"
                    errorLeyend={regExps.neighbourhood.errorLeyend}
                    regExp={regExps.neighbourhood.regExp}
                    state={neighbourhood}
                    setState={setneighbourhood}
                  />
                  <Input
                    className="addressCreateForm"
                    name="Dirección:"
                    type="text"
                    placeHolder="Dirección"
                    errorLeyend={regExps.address.errorLeyend}
                    regExp={regExps.address.regExp}
                    state={address}
                    setState={setAddress}
                  />
                </div>
                {/* </div> */}
                <div className="buttonsNextBack">
                  <Button
                    disabled={errorsFirstCard}
                    onClick={() => setContador(1)}
                  >
                    |                Siguiente
                  </Button>
                </div>
              </DivContainer>
            )}

            {contador === 1 && (
              <DivContainer className="create">
                <div className="subTitle">
                  ¿Que tipo de operación quieres realizar?:
                </div>
                <div className="operationTypeWrapper">
                  <Select
                    className="adjustOperationSelect"
                    name="Tipo de Operación"
                    errorLeyend={regExps.operation.errorLeyend}
                    state={operation}
                    setState={setOperation}
                    options={[
                      { description: "Quiero:", value: null },
                      { description: "Vender mi propiedad", value: "sell" },
                      { description: "Rentar mi propiedad", value: "rent" },
                    ]}
                  // // onChange={handleChange}
                  />
                  <Input
                    className="operationCreateForm"
                    name="Precio (USD):"
                    type="number"
                    placeHolder="Precio"
                    errorLeyend={regExps.price.errorLeyend}
                    regExp={regExps.price.regExp}
                    state={price}
                    setState={setPrice}
                  />
                </div>
                <div className="buttonsNextBack">
                  <Button onClick={() => setContador(0)}>Anterior</Button>
                  <Button
                    disabled={errorsSecondCard}
                    onClick={() => setContador(2)}
                  >
                    Siguiente
                  </Button>
                </div>
              </DivContainer>
            )}

            {contador === 2 && (
              <DivContainer className="create">
                <div className="subTitle">
                  ¿Que caraterísticas tiene tu inmueble?:
                </div>
                <div>
                  <Select
                    className="adjustOperationSelect"
                    name="Tipo de propiedad:"
                    errorLeyend={regExps.type.errorLeyend}
                    state={type}
                    setState={setType}
                    options={[
                      { description: "tengo un(a)" },
                      { description: "casa" },
                      { description: "departamento" },
                      { description: "local comercial" },
                      { description: "oficina" },
                      { description: "casa de campo" },
                      { description: "casa de playa" },
                      { description: "garage" },
                      { description: "habitacion" },
                      { description: "hotel" },
                      { description: "local industrial" },
                      { description: "terreno/lote" },
                      { description: "terreno agricola" },
                      { description: "otros" },
                    ]}
                  />
                  <div className="caracteristicasSubWrapper">
                    <Input
                      className="addressCreateForm"
                      name="Area (Total o L x A):"
                      type="text"
                      placeHolder="Area"
                      errorLeyend={regExps.area.errorLeyend}
                      regExp={regExps.area.regExp}
                      state={area}
                      setState={setArea}
                    />
                    <Input
                      className="addressCreateForm"
                      name="Habitaciones:"
                      type="number"
                      placeHolder="Habitaciones"
                      errorLeyend={regExps.rooms.errorLeyend}
                      regExp={regExps.rooms.regExp}
                      state={rooms}
                      setState={setRooms}
                    />
                  </div>
                  <div className="caracteristicasSubWrapper">
                    <Input
                      className="addressCreateForm"
                      name="Baños:"
                      type="number"
                      max="12"
                      placeHolder="Baños"
                      errorLeyend={regExps.bathrooms.errorLeyend}
                      regExp={regExps.bathrooms.regExp}
                      state={bathrooms}
                      setState={setBathrooms}
                    />
                    <Select
                      className="adjustCocheraSelect"
                      name="Cochera:"
                      errorLeyend={regExps.parkingSlot.errorLeyend}
                      state={parkingSlot}
                      setState={setParkingSlot}
                      options={[
                        { description: "Elija una opción:", value: null },
                        { description: "Sí", value: true },
                        { description: "No", value: false },
                      ]}
                    />
                  </div>
                  <div className="caracteristicasSubWrapper">
                    <Input
                      className="addressCreateForm"
                      name="Fecha Construcción:"
                      type="number"
                      min="1900"
                      max="2022"
                      placeHolder="Fecha Construcción"
                      errorLeyend={regExps.constructionDate.errorLeyend}
                      regExp={regExps.constructionDate.regExp}
                      state={constructionDate}
                      setState={setConstructionDate}
                      funcion={validateWithCreation}
                    />
                    <Input
                      className="addressCreateForm"
                      name="Fecha Renovación:"
                      type="number"
                      min="1900"
                      max="2022"
                      placeHolder="Fecha renovación"
                      errorLeyend={regExps.renovationDate.errorLeyend}
                      regExp={regExps.renovationDate.regExp}
                      state={renovationDate}
                      setState={setRenovationDate}
                      funcion={validateWithCreation}
                    />
                  </div>
                </div>
                <div className="buttonsNextBack">
                  <Button onClick={() => setContador(1)}>Anterior</Button>
                  <Button
                    disabled={errorsThirdCard}
                    onClick={() => setContador(3)}
                  >
                    Siguiente
                  </Button>
                </div>
              </DivContainer>
            )}

            {contador === 3 && (
              <>
                <DivContainer className="createPicture">
                  <div>
                    <div className="subTitle">
                      Sube imágenes de tu propiedad, y listo!
                    </div>
                    <div className="cloudinaryWrapper">
                      <Cloudinary getImages={getImagesResultsCloudinary} />
                      <Cloudinary getImages={getImagesResultsCloudinary} />
                      <Cloudinary getImages={getImagesResultsCloudinary} />
                      <Cloudinary getImages={getImagesResultsCloudinary} />
                      <Cloudinary getImages={getImagesResultsCloudinary} />
                      <Cloudinary getImages={getImagesResultsCloudinary} />

                    </div>
                  </div>
                  <div className="buttonsNextBack">
                    <Button onClick={() => setContador(2)}>Anterior</Button>
                  </div>
                </DivContainer>
                <TermsAndConditions>
                  <Label>
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      onChange={onChangeTerms}
                      checked={termsAndConditions}
                    />
                    Acepto los términos y condiciones.
                  </Label>
                </TermsAndConditions>
                {false && (
                  <MensajeError>
                    <p>
                      <FontAwesomeIcon icon={faCircleExclamation} />
                      <b>Error:</b> Para publicar tienes que llenar el formulario
                      correctamente.
                    </p>
                  </MensajeError>
                )}
                <SubmitContainer>
                  <Button
                    disabled={!formOk}
                    className="submitCreateForm"
                    type="submit"
                  >
                    {" "}
                    Publicar{" "}
                  </Button>
                </SubmitContainer>
              </>
            )}
          </form>
        }
      </div>
    </div>
  );
}
