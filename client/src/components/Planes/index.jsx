import React from "react";
import DivContainer from '../../styledComponents/DivContainer';
import './planes.css';

export default function Planes(){

    
    return(
       <div className="contenedor">

            <p className="p-titulo">Comprar planes:</p>
        
            <div className="sub-cont">
        

               <div className="premium">
                   <p className="descripcion-plan">200 USD al mes</p>
                   <p className="descripcion-plan">Publicaciones Ilimitadas</p>
                   <p className="descripcion-plan">Descripción:</p>
               </div>

               <div className="vip">
               <p className="descripcion-plan">350 USD al mes</p>
                   <p className="descripcion-plan">2 publicaciones</p>
                   <p className="descripcion-plan">Descripción:</p>
                </div>

            </div>   
       </div>
    )
}