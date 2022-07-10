
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'

export default function CalendarCard ({summary,location,start,end,attendees}){
  return (

    <StyledCard className={styles.contenedorGral}>
        
        <div>
          <h2 className={styles.datos}>{summary}</h2>
        </div>

        <div>
          <h2 className={styles.datos}>{location}</h2>          
        </div>

        <div>
          <h2 className={styles.datos}>{start}</h2> 
        </div>

        <div>
          <h2 className={styles.datos}>{end}</h2>
        </div>

        <div>
          <h2 className={styles.datos}>{attendees}</h2>
        </div>

    </StyledCard>
  )
}

