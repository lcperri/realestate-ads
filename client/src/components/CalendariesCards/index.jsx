import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CalendaryCard from '../../dumb/CalendaryCard';
import CardsContainer from '../../styledComponents/CardsContainer';
import DivContainer from '../../styledComponents/DivContainer';

export default function CalendariesCards() {

  const calendaryC = useSelector((state) => state.cardsCalendary);

 /*  useEffect(() => {
   
  }, []); */

  return (
    <>
    <DivContainer className="calendaris">
      <CardsContainer>
        {
         calendaryC.length ?
         calendaryC.map(c => {
            return(
                <div key={c.id}>
                    <CalendaryCard key={c.id} summary={c.summary} location={c.location} colorId={c.colorId} start={c.start} end={c.end} attendees={c.attendees}/>
                </div>
            )
         }) : <div></div>
        }

      </CardsContainer>
      </DivContainer>
    </>
  )
}

