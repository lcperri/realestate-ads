import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './FormCreate.css';
import { createProperty, getAllProperties } from '../../redux/actions';
import DivContainer from "../../styledComponents/DivContainer";
import Cloudinary from "../Cloudinary";
import Button from "../../styledComponents/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GrupoInput, Option, ErrorLeyend, ValidationIcon, TermsAndConditions, SubmitContainer, MensajeError, MensajeExito, Label } from "../../styledComponents/StyledFormElements";
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";
import { regExps } from "../FormElements/regExpressions";

//--funcion para hacer validaciones----------------------------
function validators(input) {
    const errors = {}

    if (!input.neighbourhood) { errors.neighbourhood = "El barrio es requerido!!" }
    if (!input.city) { errors.city = "*" }
    if (!input.address) { errors.address = "La dirección es requerida!!" }
    if (!input.area) { errors.area = "El area es requerido!!" }
    if (!input.rooms)/* {errors.rooms = "La cant de habitaciones es requerida!!"} */
        if (!input.bathrooms)/* {errors.bathrooms = "La cant de baños es requerida!!"} */
            //if(!input.pictures.length)/* {errors.pictures = "La carga de imagenes es requerida!!"} */
            if (input.area < 0) { errors.area = "No se permiten Numeros Negativos"; }
    if (input.rooms < 0) { errors.rooms = "No se permiten Numeros Negativos"; }
    if (input.bathrooms < 0) { errors.bathrooms = "No se permiten Numeros Negativos"; }
    //Validación para que se active o desactive el botón de Submit form:
    //if (JSON.stringify(errors) === '{}') return { none: true }
    return errors;
}
//--------------------------------------------------------------------------------------------

export default function FormCreateProp() {
    // const [input, setInput] = useState(initialState);
    const [contador, setContador] = useState(0)
    const dispatch = useDispatch();

    const cleanForm = () => {
        setCity({ key: '', valid: null })
        setneighbourhood({ key: '', valid: null })
        setAddress({ key: '', valid: null })
        setPrice({ key: '', valid: null })
        setOperation({ key: '', valid: null })
        setType({ key: '', valid: null })
        setArea({ key: '', valid: null })
        setRooms({ key: '', valid: null })
        setBathrooms({ key: '', valid: null })
        setParkingSlot({ key: '', valid: null })
        setConstructionDate({ key: '', valid: null })
        setRenovationDate({ key: '', valid: null })
        setPictures({ key: '', valid: null })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        //Mensaje debajo de btn submit: propi creada:
        setPropertyCreated(true)
        setTermsAndConditions(false)

        cleanForm()
        //clean:
        
    }

    //Obteniendo imágeness de Cloudinary:
    const getImagesResultsCloudinary = (images) => {
        setPictures({
            pictures: [images] || []
        })
    }

    const [errorsFirstCard, setErrorsFirstCard] = useState(true)
    const [errorsSecondCard, setErrorsSecondCard] = useState(true)
    const [errorsThirdCard, setErrorsThirdCard] = useState(true)

    const [city, setCity] = useState({ key: '', valid: null })
    const [neighbourhood, setneighbourhood] = useState({ key: '', valid: null })
    const [address, setAddress] = useState({ key: '', valid: null })
    const [price, setPrice] = useState({ key: '', valid: null })
    const [operation, setOperation] = useState({ key: '', valid: null })
    const [type, setType] = useState({ key: '', valid: null })
    const [area, setArea] = useState({ key: '', valid: null })
    const [rooms, setRooms] = useState({ key: '', valid: null })
    const [bathrooms, setBathrooms] = useState({ key: '', valid: null })
    const [parkingSlot, setParkingSlot] = useState({ key: '', valid: null })
    const [constructionDate, setConstructionDate] = useState({ key: '', valid: null })
    const [renovationDate, setRenovationDate] = useState({ key: '', valid: null })
    const [pictures, setPictures] = useState({ key: '', valid: null })
    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [propertyCreated, setPropertyCreated] = useState(false)
    const [formOk, setFormOk] = useState(false)

    useEffect(() => {
        //1ra card
        if (city.valid === 'true' && neighbourhood.valid === 'true' && address.valid === 'true')
            setErrorsFirstCard(false)
        else
            setErrorsFirstCard(true)
        //2da card
        if (price.valid === 'true' && operation.valid === 'true')
            setErrorsSecondCard(false)
        else
            setErrorsSecondCard(true)
        //3ra card
        if (type.valid === 'true' && area.valid === 'true' && rooms.valid === 'true' && bathrooms.valid === 'true' && parkingSlot.valid === 'true' && constructionDate.valid === 'true' && renovationDate.valid === 'true')
            setErrorsThirdCard(false)
        else
            setErrorsThirdCard(true)

    }, [city, neighbourhood, address, price, operation, type, area, rooms, bathrooms, parkingSlot, constructionDate, renovationDate])

    const onChangeTerms = (e) => {
        setTermsAndConditions(e.target.checked)
    }

    useEffect (()=> {
        if (
            type.valid === 'true' &&
            city.valid === 'true' &&
            address.valid === 'true' &&
            operation.valid === 'true' &&
            price.valid === 'true' &&
            area.valid === 'true' &&
            rooms.valid === 'true' &&
            bathrooms.valid === 'true' &&
            constructionDate.valid === 'true' &&
            renovationDate.valid === 'true' &&
            neighbourhood.valid === 'true' &&
            parkingSlot.valid === 'true' &&
            // pictures.valid === 'true' &&
            termsAndConditions === true
        ) setFormOk(true)
        else setFormOk(false)
    }, [termsAndConditions])

    return (
        <div className="createProperty">
            <form onSubmit={handleOnSubmit} id='form'>
                <div className="form">
                    <div className='title'>
                        PUBLICA TU INMUEBLE
                    </div>
                    {contador === 0 &&
                        <DivContainer className="create">
                            {/* <div className='subContainerCreate'> */}
                            <div className="subTitle">Cuéntanos sobre su ubicación:</div>
                            <div className="addressWrapper">
                                <Input
                                    className='addressCreateForm'
                                    name='Ciudad:'
                                    type='text'
                                    placeHolder='Ciudad'
                                    errorLeyend={regExps.city.errorLeyend}
                                    regExp={regExps.city.regExp}
                                    state={city}
                                    setState={setCity}
                                />
                                <Input
                                    className='addressCreateForm'
                                    name='Zona/Barrio:'
                                    type='text'
                                    placeHolder='Zona/Barrio'
                                    errorLeyend={regExps.neighbourhood.errorLeyend}
                                    regExp={regExps.neighbourhood.regExp}
                                    state={neighbourhood}
                                    setState={setneighbourhood}
                                />
                                <Input
                                    className='addressCreateForm'
                                    name='Dirección:'
                                    type='text'
                                    placeHolder='Dirección'
                                    errorLeyend={regExps.address.errorLeyend}
                                    regExp={regExps.address.regExp}
                                    state={address}
                                    setState={setAddress}
                                />
                            </div>
                            {/* </div> */}
                            <div className="buttonsNextBack">
                                <Button disabled={errorsFirstCard} onClick={() => setContador(1)}> Siguiente</Button>
                            </div>
                        </DivContainer>
                    }

                    {contador === 1 &&
                        <DivContainer className="create">
                            <div className="subTitle">¿Que tipo de operación quieres realizar?:</div>
                            <div className='operationTypeWrapper'>
                                <Select
                                    className='adjustOperationSelect'
                                    name='Tipo de Operación'
                                    errorLeyend={regExps.operation.errorLeyend}
                                    state={operation}
                                    setState={setOperation}
                                    options={[
                                        { description: 'Quiero:', value: null },
                                        { description: 'Vender mi propiedad', value: 'sell' },
                                        { description: 'Rentar mi propiedad', value: 'rent' }
                                    ]}
                                // // onChange={handleChange} 
                                />
                                <Input
                                    className='operationCreateForm'
                                    name='Precio (USD):'
                                    type='number'
                                    placeHolder='Precio'
                                    errorLeyend={regExps.price.errorLeyend}
                                    regExp={regExps.price.regExp}
                                    state={price}
                                    setState={setPrice}
                                />
                            </div>
                            <div className="buttonsNextBack">
                                <Button onClick={() => setContador(0)}>Anterior</Button>
                                <Button disabled={errorsSecondCard} onClick={() => setContador(2)}>Siguiente</Button>
                            </div>
                        </DivContainer>
                    }

                    {contador === 2 &&
                        <DivContainer className="create">
                            <div className='subContainerCreate'>
                                <div className="subTitle">
                                    ¿Que caraterísticas tiene tu inmueble?:
                                </div>
                                <div >
                                    <Select
                                        className='adjustOperationSelect'
                                        name='Tipo de propiedad:'
                                        errorLeyend={regExps.type.errorLeyend}
                                        state={type}
                                        setState={setType}
                                        options={[
                                            { description: 'Tengo un(a)' },
                                            { description: 'Casa' },
                                            { description: 'Departamento' },
                                            { description: 'Local Comercial' },
                                            { description: 'Casa de campo' },
                                            { description: 'Cochera' },
                                            { description: 'Habitación' },
                                            { description: 'Hotel' },
                                            { description: 'Local Industrial' },
                                            { description: 'Oficina' },
                                            { description: 'Terreno/Lote' },
                                            { description: 'Terreno agricola' },
                                        ]}
                                    />
                                    <div className="caracteristicasSubWrapper">
                                        <Input
                                            className='addressCreateForm'
                                            name='Area (Total o L x A):'
                                            type='text'
                                            placeHolder='Area'
                                            errorLeyend={regExps.area.errorLeyend}
                                            regExp={regExps.area.regExp}
                                            state={area}
                                            setState={setArea}
                                        />
                                        <Input
                                            className='addressCreateForm'
                                            name='Habitaciones:'
                                            type='number'
                                            placeHolder='Habitaciones'
                                            errorLeyend={regExps.rooms.errorLeyend}
                                            regExp={regExps.rooms.regExp}
                                            state={rooms}
                                            setState={setRooms}
                                        />
                                    </div>
                                    <div className="caracteristicasSubWrapper">
                                        <Input
                                            className='addressCreateForm'
                                            name='Baños:'
                                            type='number'
                                            max='12'
                                            placeHolder='Baños'
                                            errorLeyend={regExps.bathrooms.errorLeyend}
                                            regExp={regExps.bathrooms.regExp}
                                            state={bathrooms}
                                            setState={setBathrooms}
                                        />
                                        <Select
                                            className='adjustOperationSelect'
                                            name='Cochera:'
                                            errorLeyend={regExps.parkingSlot.errorLeyend}
                                            state={parkingSlot}
                                            setState={setParkingSlot}
                                            options={[
                                                { description: 'Elija una opción:', value: null },
                                                { description: 'Sí', value: true },
                                                { description: 'No', value: false },
                                            ]}
                                        />
                                    </div>
                                    <div className="caracteristicasSubWrapper">
                                        <Input
                                            className='addressCreateForm'
                                            name='Fecha Construcción:'
                                            type='number'
                                            min='1900'
                                            max='2022'
                                            placeHolder='Fecha Construcción'
                                            errorLeyend={regExps.constructionDate.errorLeyend}
                                            regExp={regExps.constructionDate.regExp}
                                            state={constructionDate}
                                            setState={setConstructionDate}
                                        />
                                        <Input
                                            className='addressCreateForm'
                                            name='Fecha Renovación:'
                                            type='number'
                                            min='1900'
                                            max='2022'
                                            placeHolder='Fecha renovación'
                                            errorLeyend={regExps.renovationDate.errorLeyend}
                                            regExp={regExps.renovationDate.regExp}
                                            state={renovationDate}
                                            setState={setRenovationDate}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="buttonsNextBack">
                                <Button onClick={() => setContador(1)}>Anterior</Button>
                                <Button disabled={errorsThirdCard} onClick={() => setContador(3)}>Siguiente</Button>
                            </div>
                        </DivContainer>
                    }

                    {contador === 3 &&
                        <>
                            <DivContainer className="create">
                                <div className='subContainerCreate'>
                                    <div className="subTitle">Sube imágenes de tu propiedad, y listo!</div>
                                    <Cloudinary getImages={getImagesResultsCloudinary} />
                                </div>
                                <div className="buttonsNextBack">
                                    <Button onClick={() => setContador(2)}>Anterior</Button>
                                </div>
                            </DivContainer>
                            <TermsAndConditions>
                                <Label>
                                    <input
                                        type='checkbox'
                                        name='terms'
                                        id='terms'
                                        onChange={onChangeTerms}
                                        checked={termsAndConditions} />
                                    Acepto los términos y condiciones.
                                </Label>
                            </TermsAndConditions>
                            {false && <MensajeError>
                                <p>
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                    <b>Error:</b> Para publicar tienes que llenar el formulario correctamente.
                                </p>
                            </MensajeError>}
                            <SubmitContainer>
                                <Button disabled={!formOk} className="submitCreateForm" type='submit'> Publicar </Button>
                                {propertyCreated && <MensajeExito>Propiedad publicada exitosamente.</MensajeExito>}
                            </SubmitContainer>
                        </>
                    }
                </div >
            </form >
        </div>
    )
}