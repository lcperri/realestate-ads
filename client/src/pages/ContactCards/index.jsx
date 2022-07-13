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
      {/* <div className={styles.contact_subWrapper}>
            { !userId
              ? <div>
                  <h4>
                    Te gusta esta propiedad?
                    No pierdas la oportunidad de {property.operation === 'rent' ? 'alquilarla.' : 'adquirirla.'} <br />
                    Inicia sesión o regístrate gratis para comunicarte con el propietario.
                  </h4>
                  <DivRow padding='10px 10px 10px 10px' justCont='center'>
                    <StyledLink to='/sesion' url={id}>
                      <Button>
                        Iniciar sesión
                      </Button>
                    </StyledLink>
                    <StyledLink color='#3e4b56' to='/registro' >
                      registrarse
                    </StyledLink>
                  </DivRow>
                </div>
              :
                form === false || form === undefined 
                ? <FormContacto /> 
                : form === true && <Calendar operation={property?.operation} />
            }
          </div> */}
      </DivContainer>
    </>
  )
}