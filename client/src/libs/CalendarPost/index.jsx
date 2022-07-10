import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import styles from './styles.module.css';
import { Label, Input, Select} from '../../styledComponents/StyledFormElements';
import Button from "../../styledComponents/Button";

import CalendarAuth from "../Calendar";
import DivContainer from "../../styledComponents/DivContainer";

import { createEvent, switchBetweenForms } from "../../redux/actions"; 
/*import CalendarCards from './../CalendarCards'; */
import LoginController from './../../localStorage/login';
import { useParams } from 'react-router-dom';

export default function Calendar ({ operation }) {
   const dispatch = useDispatch();
   const headers = LoginController();
   const {id:location} = useParams();

   const summary = operation === 'rent' ? 'Alquiler' : 'Venta'; 
   const [ dia, setDia ] = useState('');
   const [ hora, setHora ] = useState('');
   
   // const authorized = useSelector((state) => state.calendar);
   const authorized = true;

   //-------------creo dato startDateTime
   const modifDia = dia.replace('/', '-');//paso de 2022/12/12 a 2022-12-12
   let startDateTime = modifDia+hora;//unifico dia + hora y obtengo startDateTime

   //-----funcion suma 30'
   function sumaMinutos(hora){
      let result = '';
      if(hora === 'T12:00:00.000Z')return result = 'T12:30:00.000Z';
      if(hora === 'T12:30:00.000Z')return result = 'T13:00:00.000Z';
      if(hora === 'T13:00:00.000Z')return result = 'T13:30:00.000Z';
      if(hora === 'T13:30:00.000Z')return result = 'T14:00:00.000Z';
      if(hora === 'T14:00:00.000Z')return result = 'T14:30:00.000Z';
      if(hora === 'T14:30:00.000Z')return result = 'T15:00:00.000Z';
      if(hora === 'T15:00:00.000Z')return result = 'T15:30:00.000Z';
      if(hora === 'T15:30:00.000Z')return result = 'T16:00:00.000Z';
      if(hora === 'T16:00:00.000Z')return result = 'T16:30:00.000Z';
      if(hora === 'T16:30:00.000Z')return result = 'T17:00:00.000Z';
      if(hora === 'T17:00:00.000Z')return result = 'T17:30:00.000Z'; 
   
   }
   //----creo dato endDateTime
   let endH = sumaMinutos(hora);
   let endDateTime = modifDia+endH;//obtengo  endDateTime -->2022-07-06T11:30:00.000Z
   
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createEvent({ summary, location, startDateTime, endDateTime }, headers));
   };

   const switchButton = () => {
      dispatch(switchBetweenForms());
   }

   return (

      <div className={styles.createProperty}>
         <form onSubmit={handleSubmit} id='form'>
            <div className="form">
                  <div className='title'>
                      Programá una visita...
                  </div>
                  <DivContainer contacto={true} >
                     <div className="addressWrapper"></div>
                     { !authorized ? (<CalendarAuth></CalendarAuth>) :
                        (
                           <>
               
                              <Label className={styles.label}>Motivo</Label>
                              <Select  className={styles.selectMotivo}                
                                 id='summary'
                                 value={summary}
                                 /* onChange={(e) => setSummary(e.target.value)} */
                              >
                                 <option value={null}>Motivo</option>
                                 <option value={"Visita venta Mikasa Nueva"}>Vender</option>
                                 <option value={"Visita alquiler Mikasa Nueva"}>Rentar</option>
                                                                 
                              </Select>                            

                              <Label className={styles.horarioLabel}>Horario de visita: de 09 a 14hs - 30min por Visita</Label>
                              
                              <Label className={styles.label}>Seleccione día de la visita:</Label>
                              <Input className={styles.inputDia}
                                 type= "date"/* "datetime-local" */ 
                                 id='dia'
                                 value={dia}
                                 onChange={(e) => setDia(e.target.value)}>
                              </Input>
                                               
                              <Label className={styles.input}>Seleccione horario: </Label>                              
                              <Select  className={styles.selectHorario}
                                 type='text'
                                 id='hora'
                                 value={hora}
                                 onChange={(e) => {setHora(e.target.value)}}
                              >
                                 <option value={null}>Horarios</option>
                                 <option value={"T12:00:00.000Z"}>09:00:00</option>
                                 <option value={"T12:30:00.000Z"}>09:30:00</option>
                                 <option value={"T13:00:00.000Z"}>10:00:00</option>
                                 <option value={"T13:30:00.000Z"}>10:30:00</option>
                                 <option value={"T14:00:00.000Z"}>11:00:00</option>
                                 <option value={"T14:30:00.000Z"}>11:30:00</option>
                                 <option value={"T15:00:00.000Z"}>12:00:00</option>
                                 <option value={"T15:30:00.000Z"}>12:30:00</option>
                                 <option value={"T16:00:00.000Z"}>13:00:00</option>
                                 <option value={"T16:30:00.000Z"}>13:30:00</option>
                                 <option value={"T17:00:00.000Z"}>14:00:00</option>
                                                                 
                              </Select>

                              <br/>
                              <Button type="submit" className={styles.btnVisita}>Programar visita</Button>
               
                              {/* <CalendarCards/> */}
                           </>
                        )
                     }
                     <Button type="button" className={styles.contactar} onClick={switchButton}>Contactar</Button>
                  </DivContainer>
            </div>
         </form> 
      </div>  
   )
}
/*
const eventStartTime = new Date()
    eventStartTime.setDate(eventStartTime.getMonth())
    eventStartTime.setDate(eventStartTime.getDay())

    const eventEndTime = new Date()
    eventEndTime.setDate(eventEndTime.getMonth())
    eventEndTime.setDate(eventEndTime.getDay())



    startDateTime: 2022-07-03T23:45:27.434Z, endDateTime: 2022-07-03T23:45:27.434Z
*/