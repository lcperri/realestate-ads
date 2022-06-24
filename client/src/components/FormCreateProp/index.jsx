import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './FormCreate.css';

//--funcion para hacer validaciones----------------------------
function validators(input){
    const errors = {}

}

export default function FormCreateProp(){

    const initialState = {adress: "", rentPrice: "", sellPrice: "", area: "", type: "", rooms:"", 
                        bathrooms: "", city: "", neighbourhood: "", constructionDate: "", renovationDate: "",
                        parkingSlot: "", pictures: []};
    const [input,setInput] = useState(initialState);
    const [error, setError] = useState(initialState);
    const dispatch = useDispatch();

    const handleCH = (e) => {};
    const handlerS = (e) => {};

    return(
        <div cont-gral-create>
            <form onSubmit={handlerS} className="cont-formulario">
                  
                <div className="grupo1">                   

                    <div className="div-tiposProps">
                       <label className="label">Type Property:</label> 
                       <br></br>
                       <input type={"checkbox"} id={'check-casa'} value={input.type} className="inp-check"/> <label className="label-ch">Casa</label>
                       <input type={"checkbox"} id={'check-ph'} value={input.type} className="inp-check"/> <label className="label-ch">Ph</label>
                       <input type={"checkbox"} id={'check-depto'} value={input.type} className="inp-check"/> <label className="label-ch">Departamento</label>
                    </div>
                    <br></br>

                    <div className="div-tipoPrecio">
                        <label className="label">Price Type: </label>
                        <br></br>
                        <label className="label">Sellprice: </label>
                        <input className="" type={"number"} id={"sellprice"} value={input.sellPrice} onChange={handleCH} min="0" max="100000000"/>
                        <br></br>
                        <label className="label">Rentprice: </label>
                        <input className="" type={"number"} id={"rentPrice"} value={input.rentPrice} onChange={handleCH} min="0" max="10000000"/>
                        
                    </div>
                    <br></br>


                    
                </div>
            </form>
        </div>
    )
}