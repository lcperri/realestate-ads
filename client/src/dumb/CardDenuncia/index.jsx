import StyledCard from "../../styledComponents/StyledCard";
import styles from "./styles.module.css";
import DivContainer from "../../styledComponents/DivContainer";

export default function CardDenuncia({ reason }) {
  return (
    <DivContainer>
      <StyledCard className={styles.contenedorGral}>
        <div>
          <h2 className={styles.datos}>Razon: </h2>
          <h2 className={styles.data}>{reason}</h2>
        </div>
      </StyledCard>
    </DivContainer>
  );
}
