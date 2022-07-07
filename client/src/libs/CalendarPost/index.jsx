import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import styles from './styles.module.css';
import { Label, Input, Select} from '../../styledComponents/StyledFormElements';
import Button from "../../styledComponents/Button";

import CalendarAuth from "../Calendar";
import DivContainer from "../../styledComponents/DivContainer";

import { createEvent } from "../../redux/actions"; 
/*import CalendarCards from './../CalendarCards'; */
import LoginController from './../../localStorage/login';

export default function Calendar () {
   const dispatch = useDispatch();
   const id = localStorage.getItem('id');
   const headers = LoginController();

   const [ summary, setSummary ] = useState('');
   const [ location, setLocation ] = useState('');
   const [ startDateTime, setStartDateTime ] = useState('');
   const [ time, setTime ] = useState('');
   // const authorized = useSelector((state) => state.calendar);
   const authorized = true;
   
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createEvent(id, { summary, location, startDateTime }, headers));
   }
   return (

      <div className="createProperty">
         <form onSubmit={handleSubmit} id='form'>
            <div className="form">
                  <div className='title'>
                      Programá una visita...
                  </div>
                  <DivContainer className="create">
                     <div className="addressWrapper"></div>
                     { !authorized ? (<CalendarAuth></CalendarAuth>) :
                        (
                           <>
               
                              <Label className={styles.label}>Motivo</Label>
                              <Select  className={styles.selectMotivo}                     
                                 type='text'
                                 id='summary'
                                 value={summary}
                                 onChange={(e) => setSummary(e.target.value)}>
                                 <option value="Visita venta Mikasa Nueva">Compra</option>
                                 <option value="Visita alquiler Mikasa Nueva">Alquiler</option>
                              </Select>

                              <Label  className={styles.label}>Propiedad</Label>
                              <Input  className={styles.input}
                                 type='text'
                                 id='location'
                                 value={location}
                                 onChange={(e) => setLocation(e.target.value)}>
                              </Input>                              

                              <Label className={styles.horarioLabel}>Horario de visita: de 09 a 18hs - 30min por Visita</Label>
                              
                              <Label className={styles.label}>Seleccione día de la visita:</Label>
                              <Input className={styles.input}
                                 type= "date"/* "datetime-local" */ 
                                 id='startDateTime'
                                 value={startDateTime}
                                 onChange={(e) => setStartDateTime(e.target.value)}>
                              </Input>
                                               
                              <Label className={styles.input}>Seleccione horario: </Label>
                              {/* <Input className={styles.input}
                                 type="time" name="hora" min="09:00" max="18:00" step="1800" 
                                 id='time'
                                 value={time}
                                 onChange={(e) => setTime(e.target.value)}>
                              </Input> */}
                              <Select className={styles.selectHorario}
                                 type='text'
                                 id='time'
                                 value={time}
                                 onChange={(e) => setTime(e.target.value)}>
                                 <option value="09:00:00">09:00:00</option>
                                 <option value="09:30:00">09:30:00</option>
                                 <option value="10:00:00">10:00:00</option>
                              </Select>

                              <br/>
                              <Button type="submit" className={styles.btnVisita}>Programar visita</Button>
               
                              {/* <CalendarCards/> */}
                           </>
                        )
                     }
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