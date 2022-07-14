import StyledCard from "../../styledComponents/StyledCard";
import styles from "./styles.module.css";
import DivContainer from "../../styledComponents/DivContainer";

export default function CardDenuncia({ reason }) {
  return (
      <div className={styles.contenedor}>
        <div>
          <h2 className={styles.datos}>Razón: </h2>
          <h2 className={styles.data}>{reason}</h2>
        </div>
      </div>
    
  );
}
