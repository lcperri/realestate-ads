import Calendar from "../../libs/Calendar";
import DivContainer from "../../styledComponents/DivContainer";
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function CalendarForm () {

   const [ summary, setSummary ] = useState('');
   const [ property, setProperty ] = useState('');
   const [ startDateTime, setStartDateTime ] = useState('');
   const [ endDateTime, setEndDateTime ] = useState('');
   const authorized = useSelector((state) => state.calendar);

   const handleSubmit = () => {
   }

   return (
      <DivContainer>
         { !authorized ? (<Calendar></Calendar>) :
            (<form onSubmit={handleSubmit}>
               <label>Motivo</label>
               <input
                  type='text'
                  id='summary'
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}>
               </input>
               <br />
               <label>Propiedad</label>
               <input
                  type='text'
                  id='property'
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}>
               </input>
               <br />
               <label>Comienzo de la visita</label>
               <input
                  type='datetime-local'
                  id='startDateTime'
                  value={startDateTime}
                  onChange={(e) => setStartDateTime(e.target.value)}>
               </input>
               <br />
               <label>Fin de la visita</label>
               <input
                  type='datetime-local'
                  id='endDateTime'
                  value={endDateTime}
                  onChange={(e) => setEndDateTime(e.target.value)}>
               </input>
               <br />
               <button type="submit">Programar visita.</button>
            </form>)
         }
      </DivContainer>
   )
}