
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'

export default function CalendarCard ({summary,location,start,end,attendees}){
  return (

    <StyledCard className={styles.contenedorGral}>
        
        <div>
          <h2 className={styles.datos}>Operación {summary}</h2>
        </div>

        <div>
          <h2 className={styles.datos}>Propiedad: {location}</h2>          
        </div>

        <div>
          <h2 className={styles.datos}>Interesado: {attendees}</h2>
        </div>
        
        <div>
          <h2 className={styles.datos}>Comienzo de la visita: {start}</h2> 
        </div>

        <div>
          <h2 className={styles.datos}>Final de la visita: {end}</h2>
        </div>


    </StyledCard>
  )
}

