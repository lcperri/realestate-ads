
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
import DivContainer from '../../styledComponents/DivContainer';

export default function CardDenuncia ({ reason , denounced }){
  return (
    <DivContainer className={styles.contactForm}>
    <StyledCard className={styles.contenedorGral}>
        
      <div >
        <h2 className={styles.datos}>Razon: </h2>
        <h2 className={styles.data}>{/* {capitalize(reason)} */}No está como en las fotos </h2>
      </div>

      <div>
        <h2 className={styles.datos}>Denuncia: </h2>
        <p className={styles.texto}>{/* {capitalize(denounced)} */}
        Un texto es una composición de signos codificados en un sistema de escritura que
        forma una unidad de sentido. También es una composición de caracteres imprimibles
        generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona,
        sí puede ser descifrado por su destinatario
        </p>
       </div>

    </StyledCard>
    </DivContainer>
  )
}
