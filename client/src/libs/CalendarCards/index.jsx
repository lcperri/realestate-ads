import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CalendarCard from '../../dumb/CalendarCard';
import CardsContainer from '../../styledComponents/CardsContainer';
import DivContainer from '../../styledComponents/DivContainer';
import { getCalendar, getUserById } from './../../redux/actions';
import LoginController from './../../localStorage/login';
import CalendarAuth from '../Calendar';
import styles from "./styles.module.css";


export default function CalendarCards() {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.authorized);
  const id = localStorage.getItem('id');
  const headers = LoginController();
  const calendar = useSelector((state) => state.calendar);

  useEffect(() => {
    dispatch(getUserById(id, headers));
    dispatch(getCalendar(id, headers));
  }, []);

  return (
    <>
    <DivContainer className={styles.calendaris}>
      { !authorized ? (<CalendarAuth></CalendarAuth>) :
      <CardsContainer>
        {
         calendar.length ?
         calendar.map(c => {
            return(
                <div key={c.id}>
                    <CalendarCard
                      key={c.id}
                      summary={c.summary}
                      location={c.location}
                      start={c.start.dateTime}
                      end={c.end.dateTime}
                      attendees={c.attendees[0].email}
                    />
                </div>
            )
         }) : <div></div>
        }

      </CardsContainer> }
      </DivContainer>
    </>
  )
}

