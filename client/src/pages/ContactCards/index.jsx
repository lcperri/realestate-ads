import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardsContainer from '../../styledComponents/CardsContainer';
import DivContainer from '../../styledComponents/DivContainer';
import { getUserById, seeContactsByProperty } from '../../redux/actions';
import LoginController from '../../localStorage/login';
import { useParams } from 'react-router-dom';
import ContactCard from '../../dumb/CardContact';

export default function ContactCards() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const headers = LoginController();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getUserById(id, headers));
    dispatch(seeContactsByProperty(id, headers));
  }, []);

  return (
    <>
    <DivContainer className="calendaris">
      <CardsContainer>
        {
         contacts && contacts.map(c => {
            return(
                <div key={c.id}>
                    <ContactCard
                      key={c.id}
                      name={c.name}
                      email={c.email}
                      telephone={c.telephone ? c.telephone : null }
                      message={c.message ? c.message : null }
                    />
                </div>
            )
         })
        }
      </CardsContainer>
      </DivContainer>
    </>
  )
}