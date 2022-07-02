import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Calendar from "../../libs/Calendar";
import DivContainer from "../../styledComponents/DivContainer";

import { createEvent } from "../../redux/actions";

export default function CalendarForm () {
   const dispatch = useDispatch();

   const [ summary, setSummary ] = useState('');
   const [ location, setLocation ] = useState('');
   const [ startDateTime, setStartDateTime ] = useState('');
   const authorized = useSelector((state) => state.calendar);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createEvent({ summary, location, startDateTime }));
   }

   return (
      <DivContainer>
         { !authorized ? (<Calendar></Calendar>) :
            (<form onSubmit={handleSubmit}>
               <label>Motivo</label>
               <select
                  type='text'
                  id='summary'
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}>
               <option value="Visita venta Mikasa Nueva">Compra</option>
               <option value="Visita alquiler Mikasa Nueva">Alquiler</option>
               </select>
               <br />
               <label>Propiedad</label>
               <input
                  type='text'
                  id='location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}>
               </input>
               <br />
               <label>Comienzo de la visita</label>
               <input
                  type='date'
                  id='startDateTime'
                  value={startDateTime}
                  onChange={(e) => setStartDateTime(e.target.value)}>
               </input>
               <br />
               <button type="submit">Programar visita.</button>
            </form>)
         }
      </DivContainer>
   )
}