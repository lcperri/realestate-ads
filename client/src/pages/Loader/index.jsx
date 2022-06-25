import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.ldsspinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>Cargando...</span>
      </div>
    </div>
  );
}
