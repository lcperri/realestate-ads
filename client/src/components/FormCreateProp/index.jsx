import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './FormCreate.css';
import { createProperty, getAllProperties } from '../../redux/actions';
import DivContainer from "../../styledComponents/DivContainer";



//--funcion para hacer validaciones----------------------------
function validators(input) {
    const errors = {}

    if (!input.neighbourhood) { errors.neighbourhood = "El barrio es requerido!!" }
    if (!input.city) { errors.city = "*" }
    if (!input.address) { errors.address = "La dirección es requerida!!" }
    if (!input.area)  {errors.area = "El area es requerido!!"} 
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
        }else if(e.target.id === 'operation'){
            setInput({...input, operation: e.target.value});
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
            
        }else {
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
    };

    return (
        <DivContainer>
        {/* <div className="cont-gral-create"> */}

            <div>
                <form onSubmit={handlerS} >
                  
                    <label className="lab-tipoProp">Top de propiedad:</label> 
                    <select onChange={handleCH} id={"type"} className={"select-tipoProps"}>
                      <option>Tipo de propiedad: </option>
                      <option>Casa</option>
                      <option>Departamento</option>
                      <option>Ph</option>
                      <option>Local Comercial</option>
                      <option>Casa de campo</option>
                      <option>Casa de playa</option>
                      <option>Cochera</option>
                      <option>Habitación</option>
                      <option>Hotel</option>
                      <option>Local Industrial</option>
                      <option>Oficina</option>
                      <option>Otros</option>
                      <option>Terreno/Lote</option>
                      <option>Terreno agricola</option>
                    </select>
                                  
                    <label className="lab-ciuda">Ciudad:</label> 
                    <input className={error.city ? "errorInputF" : "input-ciudad"} type={'text'} id={'city'} value={input.city} onChange={handleCH}/>
                    
                    <label className="lab-barrio">Barrio/Vecindario:</label>
                    <input className={error.neighbourhood ? "errorInputF" : "input-barrio"} type={'text'} id={'neighbourhood'} value={input.neighbourhood} onChange={handleCH} placeholder={"Barrio/Vecindario"}/>
                    <br></br>
                    
                    <label className="lab-direcc">Dirección:</label>
                    <input className={error.address ? "input-direcc-error" : "input-direcc"} type={'text'} id={'address'} value={input.address} onChange={handleCH}/>
                               
                    <label className="lab-tipoOp">Tipo de Operación:</label>
                    <select onChange={handleCH} id={"operation"} className={"select-operation"}>
                        <option>Quiero:</option>
                        <option>Vender mi propiedad</option>
                        <option>Rentar mi propiedad</option>
                    </select>
                    <br></br>

                    <label className="lab-precio">Precio:</label>
                    <input className={error.price ? "input-price-error" : "input-price"} type={'number'} id={'price'} value={input.price} onChange={handleCH} min='10' max='1111111111' placeholder="Pecio Venta/Alquiler del Inmueble"/> 
                  
                    <label className="label-area">Area: </label>
                    <input className={error.area ? "error-caract" : "input-area"} type={'text'} value={input.area} id={'area'} onChange={handleCH}/>
                    
                    <label className="label-area">Habitaciones: </label>
                    <input className={error.area ? "error-caract" : "input-area"} type={'number'} min={'1'} max={'100'} value={input.rooms} id={'rooms'} onChange={handleCH}/>
                
                    <label className="label-area">Baños: </label>
                    <input className={error.area ? "error-caract" : "input-area"} type={'number'} min={'1'} max={'50'} value={input.bathrooms} id={'bathrooms'} onChange={handleCH}/>
                

                    <label className="label-area">Cochera: </label>
                    <select onChange={handleCH} id={'parkingSlot'} className={"cochera"}>
                    <option>Si</option>
                    <option>No</option>
                    </select> 
                    <br></br>

                    <label className="label-fechConstruc">Fecha Construcción: </label>
                    <input className="input-fechaConstruc" type={'number'} id={'constructionDate'} value={input.constructionDate} onChange={handleCH} min={'1900'} max={'2022'}/>
  
                    <label className="label-fechRenov">Fecha Renovación: </label>
                    <input className="input-fechaRenov" type={'number'} id={'renovationDate'} value={input.renovationDate} onChange={handleCH} min={'0'} max={'2022'}/>                            
                
                    <br></br>
                    <label className="cargImagen">Subir Imagen:</label>
                    <input className="input-cargImagen" type={'text'} id={'pictures'} value={input.pictures} onChange={handleCH}/>
  
                    <br></br>
                    <input className="boton-sub" type={'submit'} value={"Subir Propiedad"}/>
                   
              </form>
            </div>
        </DivContainer>
    )
}