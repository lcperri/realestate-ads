import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import styles from './styles.module.css';
import { Label, Input, Select} from '../../styledComponents/StyledFormElements';
import Button from "../../styledComponents/Button";

import CalendarAuth from "../Calendar";
import DivContainer from "../../styledComponents/DivContainer";

import { createEvent, getUserById, switchBetweenForms } from "../../redux/actions"; 
/*import CalendarCards from './../CalendarCards'; */
import LoginController from './../../localStorage/login';
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";

export default function Calendar ({ operation }) {
   const dispatch = useDispatch();
   const headers = LoginController();
   const id = localStorage.getItem('id');
   const {id:location} = useParams();
   const email = useSelector((state) => state.user?.email);

   const summary = operation === 'rent' ? 'Alquiler' : 'Venta'; 
   const [ dia, setDia ] = useState('');
   const [ hora, setHora ] = useState('');
   
   useEffect(() => {
      dispatch(getUserById(id, headers));
   }, [id]);

   //-------------creo dato startDateTime
   const modifDia = dia.replace('/', '-');//paso de 2022/12/12 a 2022-12-12
   let startDateTime = modifDia+hora;//unifico dia + hora y obtengo startDateTime

   //-----funcion suma 30'
   function sumaMinutos(hora){
      let result = '';
      if(hora === 'T09:00:00.000Z')return result = 'T09:30:00.000Z';
      if(hora === 'T09:30:00.000Z')return result = 'T10:00:00.000Z';
      if(hora === 'T10:00:00.000Z')return result = 'T10:30:00.000Z';
      if(hora === 'T10:30:00.000Z')return result = 'T11:00:00.000Z';
      if(hora === 'T11:00:00.000Z')return result = 'T11:30:00.000Z';
      if(hora === 'T11:30:00.000Z')return result = 'T12:00:00.000Z';
      if(hora === 'T12:00:00.000Z')return result = 'T12:30:00.000Z';
      if(hora === 'T12:30:00.000Z')return result = 'T13:00:00.000Z';
      if(hora === 'T13:00:00.000Z')return result = 'T13:30:00.000Z';
      if(hora === 'T13:30:00.000Z')return result = 'T14:00:00.000Z';
      if(hora === 'T14:00:00.000Z')return result = 'T14:30:00.000Z'; 
   
   }
   //----creo dato endDateTime
   let endH = sumaMinutos(hora);
   let endDateTime = modifDia+endH;//obtengo  endDateTime -->2022-07-06T11:30:00.000Z
   
   const handleSubmit = (e) => {
      e.preventDefault();
      if(!dia || !hora){
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingresa los datos correspondientes.",
         });
      }else{
         dispatch(createEvent({ email, summary, location, startDateTime, endDateTime }, headers));
         Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Tu publicación fue creada exitosamente",
            showConfirmButton: false,
            timer: 1500,
         });
      }
      
   };

   const switchButton = () => {
      dispatch(switchBetweenForms());
   }

   return (
         <form onSubmit={handleSubmit} id='form'>
            <div className={styles.contactForm}>
                 
                  <DivContainer contacto={true}>
                     <div className="addressWrapper"></div>                                

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
                        <option value={"T09:00:00.000Z"}>09:00:00</option>
                        <option value={"T09:30:00.000Z"}>09:30:00</option>
                        <option value={"T10:00:00.000Z"}>10:00:00</option>
                        <option value={"T10:30:00.000Z"}>10:30:00</option>
                        <option value={"T11:00:00.000Z"}>11:00:00</option>
                        <option value={"T11:30:00.000Z"}>11:30:00</option>
                        <option value={"T12:00:00.000Z"}>12:00:00</option>
                        <option value={"T12:30:00.000Z"}>12:30:00</option>
                        <option value={"T13:00:00.000Z"}>13:00:00</option>
                        <option value={"T13:30:00.000Z"}>13:30:00</option>
                        <option value={"T14:00:00.000Z"}>14:00:00</option>
                                                         
                     </Select>

                     <br/>
                     <Button type="submit" className={styles.btnVisita}>Programar visita</Button>
                     
      
                     {/* <CalendarCards/> */}
                     <Button type="button" className={styles.contactar} onClick={switchButton}>Contactar</Button>
                  </DivContainer>
            </div>
         </form>  
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