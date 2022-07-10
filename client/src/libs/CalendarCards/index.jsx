import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CalendarCard from '../../dumb/CalendarCard';
import CardsContainer from '../../styledComponents/CardsContainer';
import DivContainer from '../../styledComponents/DivContainer';
import { getCalendar } from './../../redux/actions';
import LoginController from './../../localStorage/login';
import CalendarAuth from '../Calendar';

export default function CalendarCards() {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.authorized);
  const id = localStorage.getItem('id');
  const headers = LoginController();
  const calendaryC = useSelector((state) => state.calendar);

  useEffect(() => {
    dispatch(getCalendar(id, headers));
  }, []);

  return (
    <>
    <DivContainer className="calendaris">
      { !authorized ? (<CalendarAuth></CalendarAuth>) :
      <CardsContainer>
        {
         calendaryC.length ?
         calendaryC.map(c => {
            return(
                <div key={c.id}>
                    <CalendarCard key={c.id} summary={c.summary} location={c.location} colorId={c.colorId} start={c.start} end={c.end} attendees={c.attendees}/>
                </div>
            )
         }) : <div></div>
        }

      </CardsContainer> }
      </DivContainer>
    </>
  )
}

