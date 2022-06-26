import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './FormCreate.css';
import {createProperty, getAllProperties} from '../../redux/actions';
import DivContainer from "../../styledComponents/DivContainer";
import Button from "../../styledComponents/Button";


//--funcion para hacer validaciones----------------------------
function validators(input){
    const errors = {}

    if(!input.neighbourhood){errors.neighbourhood = "El barrio es requerido!!"}
    if(!input.city){errors.city = "La ciudad es requerida!!"}
    if(!input.address){errors.address = "La dirección es requerida!!"}
    if(!input.area) /* {errors.area = "El area es requerido!!"} */
    if(!input.rooms)/* {errors.rooms = "La cant de habitaciones es requerida!!"} */
    if(!input.bathrooms)/* {errors.bathrooms = "La cant de baños es requerida!!"} */
    //if(!input.pictures.length)/* {errors.pictures = "La carga de imagenes es requerida!!"} */

    if(input.area < 0){errors.area = "No se permiten Numeros Negativos";} 
    if(input.rooms < 0){errors.rooms = "No se permiten Numeros Negativos";} 
    if(input.bathrooms < 0){errors.bathrooms = "No se permiten Numeros Negativos";}  
    if(input.parkingSlot < 0){errors.parkingSlot = "No se permiten Numeros Negativos";}
    //Validación para que se active o desactive el botón de Submit form:
    if (JSON.stringify(errors) === '{}') return {none: true}
    return errors;
}
//--------------------------------------------------------------------------------------------

export default function FormCreateProp(){
    
<<<<<<< HEAD
    let initialState = {type: "", city: "", address:"", rentPrice:"", sellPrice: "", area:"", 
            rooms: "", bathrooms: "", parkingSlot:false};
=======
    let initialState = {
        type: "", 
        city: "", 
        address:"", 
        price:0, 
        area:"", 
        rooms: 1, 
        bathrooms:1,
        parkingSlot:false
    };

>>>>>>> 154abad33fcc023d7db463c348405bbff3cb99ec
    const [input,setInput] = useState(initialState);
    const [error, setError] = useState(initialState);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllProperties())
    }, [dispatch]);

    const handleCH = (e) => {
        e.preventDefault();
        if (e.target.id === 'type'){
            setInput({...input, type: e.target.value})
        } else if(e.target.id === 'parkingSlot'){
            if(e.target.value === 'Si'){setInput({...input, parkingSlot: true})}
            if(e.target.value === 'No'){setInput({...input, parkingSlot: false})}
        } else{
            setInput({...input, [e.target.id]: e.target.value});
            setError(validators({...input, [e.target.id]: e.target.value}));
        }
    }
        
    const handlerS = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        
        if(!input.address || !input.sellPrice|| !input.area || !input.type || !input.rooms || !input.bathrooms || !input.city){
=======
        if(!input.price && !input.rentPrice)
        if(!input.address || !input.area || !input.type || !input.rooms || !input.bathrooms || !input.city){
        }
        if(( input.rooms || input.bathrooms ) < 0){
>>>>>>> 154abad33fcc023d7db463c348405bbff3cb99ec
        }
        else{ 
            dispatch(createProperty(input));            
            setInput({});
            // setInput({type: "", city: "", address:"", rentPrice:"", price:"", area:"", 
            // bathrooms:"", neighbourhood:"",  constructionDate:"", parkingSlot:""});
        }
    };

    return(
        <DivContainer>
        {/* <div className="cont-gral-create"> */}

            <div className="div-rec">
               <form onSubmit={handlerS} className="cont-formulario">
                  
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
             
                <input className={error.city ? "errorInput" : "input-ciudad"} type={'text'} id={'city'} value={input.city} onChange={handleCH} placeholder={'Ciudad'}/>
                  
                <input className={error.neighbourhood ? "errorInput" : "input-barrio"} type={'text'} id={'neighbourhood'} value={input.neighbourhood} onChange={handleCH} placeholder={"Barrio/Vecindario"}/>
                <br></br>
                  
                <label className="label-direcc">Direccion: </label>
                <input className={error.address ? "error-direcc" : "input-direcc"} type={'text'} id={'address'} value={input.address} onChange={handleCH}/>
                 
                <label className="label-venta">Precio Venta: </label>
                <input className="input-price" type={'number'} id={'sellPrice'} value={input.sellPrice} onChange={handleCH} min='0' max='1111111111'/> 
                
                <label className="label-area">Area: </label>
                <input className={error.area ? "error-caract" : "input-area"} type={'text'} value={input.area} id={'area'} onChange={handleCH}/>
                {error.area && (<div><span className='span-error-num'>{error.area}</span></div>)}
                
                <label className="label-hab">Habitaciones: </label>
                <input className={error.area ? "error-caract" : "input-room"} type={'number'} min='0' max='100' value={input.rooms} id={'rooms'} onChange={handleCH}/>
                {error.rooms && (<div><span className='span-error-num'>{error.rooms}</span></div>)}

                <label className="label-room">Baños: </label>
                <input className={error.area ? "error-caract" : "input-room"} type={'number'} min={'1'} max={'50'} value={input.bathrooms} id={'bathrooms'} onChange={handleCH}/>
                {error.bathrooms && (<div><span className='span-error-num'>{error.bathrooms}</span></div>)}

                <label className="label-room">Cochera: </label>
                <select onChange={handleCH} id={'parkingSlot'} className={"input-room"}>
                    <option>Si</option>
                    <option>No</option>
                </select> 
                {error.parkingSlot && (<div><span className='span-error-num'>{error.parkingSlot}</span></div>)}

                <label className="label-fechConstruc">ConstructionDate: </label>
                <input className="fecha-construc" type={'number'} id={'constructionDate'} value={input.constructionDate} onChange={handleCH} min={'1900'} max={'2022'}/>
  
                <label className="label-fechRenov">RenovationDate: </label>
                <input className="fecha-construc" type={'number'} id={'renovationDate'} value={input.renovationDate} onChange={handleCH} min={'1900'} max={'2022'}/>                            
                <br></br>
                <label className="label-cargaImagen">Cargar Imagen: </label>                
                <input className="cargaFotos" type={'text'} id={'pictures'} value={input.pictures} onChange={handleCH}/>
   
                 
                <input className="boton-sub" type={'submit'} value={"Create Prop"}/>                
  
              </form>
            </div>
            
        {/* </div> */}
        </DivContainer>
    )
}