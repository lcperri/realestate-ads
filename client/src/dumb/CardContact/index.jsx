
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
import DivContainer from '../../styledComponents/DivContainer';
import capitalize from '../../functions/capitalize';

export default function ContactCard ({ name, email, telephone, message }){
  return (
    
    <StyledCard className={styles.contenedorGral}>
        
        <div>
          <h3 className={styles.datos}>Mensaje de: </h3>
          <h2 className={styles.name}>{capitalize(name)}</h2>
        </div>

        <div>
          <h3 className={styles.datos}>Correo electrónico: </h3> 
          <h2 className={styles.name}>{email}</h2>         
        </div>

        <div>
          <h3 className={styles.datos}>Teléfono: </h3>
          <h2 className={styles.name}>{telephone}</h2> 
        </div>
        
        <div>
          <h3 className={styles.datos}>Mensaje: </h3> 
          <h2 className={styles.name}>{message}</h2> 
        </div>

    </StyledCard>
    
  )
}

