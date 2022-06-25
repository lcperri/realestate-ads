import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './FormCreate.css';
import {createProperty, getAllProperties} from '../../redux/actions';


//--funcion para hacer validaciones----------------------------
function validators(input){
    const errors = {}

    if(!input.neighbourhood){errors.neighbourhood = "El barrio es requerido!!"}
    if(!input.city){errors.city = "La ciudad es requerida!!"}
    if(!input.adress){errors.adress = "La dirección es requerida!!"}
    if(!input.area) /* {errors.area = "El area es requerido!!"} */
    if(!input.rooms)/* {errors.rooms = "La cant de habitaciones es requerida!!"} */
    if(!input.bathrooms)/* {errors.bathrooms = "La cant de baños es requerida!!"} */
    if(!input.pictures.length)/* {errors.pictures = "La carga de imagenes es requerida!!"} */

    if(input.area < 0){errors.area = "No se permiten Numeros Negativos";} 
    if(input.rooms < 0){errors.rooms = "No se permiten Numeros Negativos";} 
    if(input.bathrooms < 0){errors.bathrooms = "No se permiten Numeros Negativos";}  
    if(input.parkingSlot < 0){errors.parkingSlot = "No se permiten Numeros Negativos";}
    
    return errors;
}
//--------------------------------------------------------------------------------------------

export default function FormCreateProp(){

    let initialState = {adress: "", rentPrice: "", sellPrice: "", area: "", type: "", rooms:"", 
                        bathrooms: "", city: "", neighbourhood: "", constructionDate: "", renovationDate: "",
                        parkingSlot: "", pictures: []};
    const [input,setInput] = useState(initialState);
    const [error, setError] = useState(initialState);
    const dispatch = useDispatch();

    //const allProps = useSelector(state => state.properties);//me traigo todas las props
    //const prop = useSelector(state => state.property);//me traigo la prop creada
    //let buscoProp = allProps.find(p => p.adress === input.adress);

    /* useEffect(()=>{
        dispatch(getAllProperties())
    }, [dispatch]); */

    const handleCH = (e) => {
        e.preventDefault();
        if(e.target.id === 'type'){
            setInput({...input, type: e.target.value})
        }else if(e.target.id === 'parkingSlot'){
            if(e.target.value === 'Si'){setInput({...input, parkingSlot: true})}
            if(e.target.value === 'No'){setInput({...input, parkingSlot: false})}
        }else{
            setInput({...input, [e.target.id]: e.target.value});
            setError(validators({...input, [e.target.id]: e.target.value}));
        }
    }
        
    const handlerS = (e) => {
        e.preventDefault();

        /* if(!input.sellPrice && !input.rentPrice){alert("Debe ingresar el precio correspondiente a la operacion -> Venta/Alquiler")}
        if(!input.adress || !input.area || !input.type || !input.rooms || !input.bathrooms || input.parkingSlot || !input.city ){
            alert("Complete todos los campos!!");
        }
        if(( input.rooms || input.bathrooms ) < 0){
            alert("No se permiten Numeros Negativos...!!"); 
        }
        else{  */
            dispatch(createProperty(input));            
            alert("Propiedad creada");
            setInput({adress: "", rentPrice: "", sellPrice: "", area: "", type: "", rooms:"", 
                    bathrooms: "", city: "", neighbourhood: "", constructionDate: "", renovationDate: "",
                    parkingSlot: "", pictures: []});
            //dispatch(getAllProperties());
        //}
    };

    return(
        <div className="cont-gral-create">

            <div className="div-recuadro">
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
             
                <input className={error.city ? "errorInput" : "input-ciudad"} type={'text'} id='city' value={input.city} onChange={handleCH} placeholder={'Ciudad'}/>
                  
                <input className={error.neighbourhood ? "errorInput" : "input-barrio"} type={'text'} id={'neighbourhood'} value={input.neighbourhood} onChange={handleCH} placeholder={"Barrio/Vecindario"}/>
                <br></br>
                  
                <label className="label-direcc">Direccion: </label>
                <input className={error.adress ? "error-direcc" : "input-direcc"} type={'text'} id={'adress'} value={input.adress} onChange={handleCH}/>
                 {/* {buscoProp && (<span className="span-error">Ya existe una Prop para dicha dirección!!</span>)} */}
                <div className="div-precios">
                    <label className="label-venta">Precio Venta: </label>
                    <input className="input-sellPrice" type={'number'} id={'sellPrice'} value={input.sellPrice} onChange={handleCH} min='500' max='1111111111'/> 
  
                    <label className="label-alquiler">Precio Alquiler: </label>
                    <input className="input-rentPrice" type={'number'} id={'rentPrice'} value={input.rentPrice} onChange={handleCH} min='500' max='1111111111'/>
                </div>
  
                <label className="label-area">Area: </label>
                <input className={error.area ? "error-caract" : "input-area"} type={'text'} value={input.area} id={'area'} onChange={handleCH}/>
                {error.area && (<div><span className='span-error-num'>{error.area}</span></div>)}
                
                <label className="label-area">Habitaciones: </label>
                <input className={error.area ? "error-caract" : "input-area"} type={'number'} min={'1'} max={'100'} value={input.rooms} id={'rooms'} onChange={handleCH}/>
                {error.rooms && (<div><span className='span-error-num'>{error.rooms}</span></div>)}

                <label className="label-area">Baños: </label>
                <input className={error.area ? "error-caract" : "input-area"} type={'number'} min={'1'} max={'50'} value={input.bathrooms} id={'bathrooms'} onChange={handleCH}/>
                {error.bathrooms && (<div><span className='span-error-num'>{error.bathrooms}</span></div>)}

                <label className="label-area">Cochera: </label>
                <select onChange={handleCH} id={'parkingSlot'} className={"cochera"}>
                    <option>Si</option>
                    <option>No</option>
                </select> 
                {error.parkingSlot && (<div><span className='span-error-num'>{error.parkingSlot}</span></div>)}

                <div className="fechas">
                    <label className="label-fechConstruc">ConstructionDate: </label>
                    <input className="fecha-construc" type={'date'} id={'constructionDate'} value={input.constructionDate} onChange={handleCH} />
  
                    <label className="label-fechRenov">RenovationDate: </label>
                    <input className="fecha-construc" type={'date'} id={'renovationDate'} value={input.renovationDate} onChange={handleCH} />                            
                </div>
  
                <label className="label-cargaImagen">Cargar Imagen: </label>
                {/* <input className="cargaFotos" type={'file'}/> */}
                <input className="cargaFotos" type={'text'} id={'pictures'} value={input.pictures} onChange={handleCH}/>
  
                <div>
                  <input className="boton-sub" type={'submit'} value={"Create Prop"}/>
                </div>
  
              </form>
            </div>
            
        </div>
    )
}