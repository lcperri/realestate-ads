
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'

export default function CalendarCard ({summary,location,start,end,attendees}){
  return (

    <StyledCard className={ summary === 'Venta' ? styles.contenedorVenta : styles.contenedorAlq}>
        
        <div>
          <h1 className={styles.operacion}>Operación: {summary}</h1>
        </div>

        <div>
          <h2 className={styles.datos}>Propiedad: {location}</h2>                   
        </div>

        <div>
          <h2 className={styles.datos}>Interesado: </h2>
          <h3 className={styles.mail}>{attendees}</h3> 
        </div>
        
        <div>
          <h2 className={styles.datos}>Comienzo de la visita: </h2> 
          {start}
        </div>

        <div>
          <h2 className={styles.datos}>Final de la visita: </h2>
          {end}
        </div>


    </StyledCard>
  )
}

