import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './FormCreate.css';
import { createProperty, getAllProperties } from '../../redux/actions';
import DivContainer from "../../styledComponents/DivContainer";
import Cloudinary from "../Cloudinary";
import Input from "../../styledComponents/Input";
import Label from "../../styledComponents/Label";
import Select from "../../styledComponents/Select";
import Option from "../../styledComponents/Option";
import Button from "../../styledComponents/Button"
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
    let initialState = {
        type: "",
        city: "",
        address: "",
        operation: "",
        price: 0,
        area: "",
        rooms: 1,
        bathrooms: 1,
        constructionDate: 1900,
        renovationDate: 0,
        neighbourhood: "",
        parkingSlot: false,
        pictures: []
    };

    const [input, setInput] = useState(initialState);
    const [error, setError] = useState(initialState);
    const [contador, setContador] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProperties())
    }, [dispatch]);

    const handleCH = (e) => {
        e.preventDefault();
        if (e.target.id === 'type') {
            setInput({ ...input, type: e.target.value })
        } else if (e.target.id === 'parkingSlot') {
            if (e.target.value === 'Si') { setInput({ ...input, parkingSlot: true }) }
            if (e.target.value === 'No') { setInput({ ...input, parkingSlot: false }) }
        } else if (e.target.id === 'operation') {
            setInput({ ...input, operation: e.target.value });
            if (e.target.value === 'Vender mi propiedad') { setInput({ ...input, operation: 'sell' }) }
            if (e.target.value === 'Rentar mi propiedad') { setInput({ ...input, operation: 'rent' }) }
        }
        else {
            setInput({ ...input, [e.target.id]: e.target.value });
            setError(validators({ ...input, [e.target.id]: e.target.value }));
        }
    }

    const handlerS = (e) => {
        e.preventDefault();

        if (!input.address || !input.price || !input.area || !input.type || !input.rooms || !input.city) {

        } else {
            dispatch(createProperty(input));
            alert("Creado")
            setInput({
                type: "",
                city: "",
                address: "",
                operation: "",
                price: 0,
                area: "",
                rooms: 1,
                bathrooms: 1,
                constructionDate: 1900,
                renovationDate: 0,
                neighbourhood: "",
                parkingSlot: false,
                pictures: []
            });

        }
    }

    //Obteniendo imágeness de Cloudinary:
    const getImagesResultsCloudinary = (images) =>{
        setInput({
            ...input,
            pictures: images
        })
    }
    
    useEffect(() => {
        console.log(input.pictures);
    }, [getImagesResultsCloudinary])

    return (
        <div className="createProperty">
            <form onSubmit={handlerS} id='form'>
                <div className="form">
                    <div className='title'>
                        PUBLICA TU INMUEBLE
                    </div>
                    {contador === 0 &&
                        <DivContainer className="create">
                            <div className='subContainerCreate'>
                                <div className="subTitle">Cuéntanos sobre su ubicación:</div>
                                <div className="addressWrapper">
                                    <div className="group">
                                        <Label for="">Ciudad:</Label>
                                        <Input className="addressCreateForm" type={'text'} id={'city'} value={input.city} onChange={handleCH} />
                                    </div>
                                    <div className="group">
                                        <Label>Barrio/Vecindario:</Label>
                                        <Input className="addressCreateForm" type={'text'} id={'neighbourhood'} value={input.neighbourhood} onChange={handleCH} placeholder={"Barrio/Vecindario"} />
                                    </div>
                                    <div className="group">
                                        <Label>Dirección:</Label>
                                        <Input className="addressCreateForm" type={'text'} id={'address'} value={input.address} onChange={handleCH} />
                                    </div>
                                </div>
                            </div>
                            <div className="buttonsNextBack">
                                <Button onClick={() => { setContador(1) }}> Siguiente</Button>
                            </div>
                        </DivContainer>
                    }

                    {contador === 1 &&
                        <DivContainer className="create">
                            <div className="subTitle">¿Que tipo de operación quieres realizar?:</div>
                            <div className='subContainerCreate'>
                                <div className="operationTypeWrapper">
                                    <div className="group">
                                        <Label>Tipo de Operación:</Label>
                                        <Select onChange={handleCH} id={"operation"}>
                                            <Option>Quiero:</Option>
                                            <Option>Vender mi propiedad</Option>
                                            <Option>Rentar mi propiedad</Option>
                                        </Select>
                                    </div>
                                    <div className="group">
                                        <Label>Precio:</Label>
                                        <Input type={'number'} id={'price'} value={input.price} onChange={handleCH} min='10' max='1111111111' placeholder="Pecio Venta/Alquiler del Inmueble" />
                                    </div>
                                </div>
                            </div>
                            <div className="buttonsNextBack">
                                <Button onClick={() => setContador(0)}>Anterior</Button>
                                <Button onClick={() => setContador(2)}>Siguiente</Button>
                            </div>
                        </DivContainer>
                    }

                    {contador === 2 &&
                        <DivContainer className="create">
                            <div className='subContainerCreate'>
                                <div className="subTitle">
                                    ¿Que caraterísticas tiene tu inmueble?:
                                </div>
                                <div className="caracteristicasWrapper">
                                    <div className="group">
                                        <Select onChange={handleCH} id={"type"}>
                                            <Option>Tipo de propiedad: </Option>
                                            <Option>Casa</Option>
                                            <Option>Departamento</Option>
                                            <Option>Ph</Option>
                                            <Option>Local Comercial</Option>
                                            <Option>Casa de campo</Option>
                                            <Option>Casa de playa</Option>
                                            <Option>Cochera</Option>
                                            <Option>Habitación</Option>
                                            <Option>Hotel</Option>
                                            <Option>Local Industrial</Option>
                                            <Option>Oficina</Option>
                                            <Option>Otros</Option>
                                            <Option>Terreno/Lote</Option>
                                            <Option>Terreno agricola</Option>
                                        </Select>
                                    </div>
                                    <div className="caracteristicasSubWrapper">
                                        <div className="group">
                                            <Label>Area: </Label>
                                            <Input className="addressCreateForm" type='text' value={input.area} id='area' onChange={handleCH} />
                                        </div>
                                        <div className="group">
                                            <Label>Habitaciones: </Label>
                                            <Input type={'number'} min={'1'} max={'100'} value={input.rooms} id={'rooms'} onChange={handleCH} />
                                        </div >
                                    </div>
                                    <div className="caracteristicasSubWrapper">
                                        <div className="group">
                                            <Label>Baños: </Label>
                                            <Input type={'number'} min={'1'} max={'50'} value={input.bathrooms} id={'bathrooms'} onChange={handleCH} />
                                        </div>

                                        <div className="group">
                                            <Label>Cochera: </Label>
                                            <Select onChange={handleCH} id={'parkingSlot'} className={"cochera"}>
                                                <Option>Si</Option>
                                                <Option>No</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="caracteristicasSubWrapper">
                                        <div className="group">
                                            <Label>Fecha Construcción: </Label>
                                            <Input type={'number'} id={'constructionDate'} value={input.constructionDate} onChange={handleCH} min={'1900'} max={'2022'} />
                                        </div>
                                        <div className="group">
                                            <Label>Fecha Renovación: </Label>
                                            <Input type={'number'} id={'renovationDate'} value={input.renovationDate} onChange={handleCH} min={'0'} max={'2022'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonsNextBack">
                                <Button onClick={() => setContador(1)}>Anterior</Button>
                                <Button onClick={() => setContador(3)}>Siguiente</Button>
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
                            <div className="group submit">
                                <Input type='submit' value="Publicar" />
                            </div >
                        </>
                    }

                </div >
            </form >
        </div>
    )
}