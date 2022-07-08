import React from "react";
import styles from "./Terms.module.css";

const Terms = () => {
  return (
    <div className={styles.container}>
      <article className={styles.letter}>
        <h2 className={styles.tittle}>Términos y Condiciones Generales</h2>
        <p className={styles.claustittle}>
          <b>1. PLAZO</b>
        </p>
        <p className={styles.claustext}>
          Cada Plan tendrá un plazo de publicación de 30 (treinta) días
          corridos/naturales contados a partir de la acreditación del pago (en
          adelante, el “Plazo”).
        </p>
        <p className={styles.claustext}>
          Vencido el referido Plazo, el Plan se renovará en forma automática por
          igual Plazo, salvo que el Usuario cancele el Plan, bajo las
          condiciones detalladas en la Cláusula 2 de más abajo.
        </p>
        <p className={styles.claustittle}>
          <b>2. CANCELACIÓN:</b>
        </p>
        <p className={styles.claustext}>
          El Usuario podrá cancelar su Plan en cualquier momento, y continuará
          teniendo acceso al Plan hasta el final de su periodo de facturación.
          Los pagos no son reembolsables y no se otorgarán reembolsos ni
          créditos por los periodos del Plan utilizados parcialmente o por el
          servicio no utilizado. Si cancela el Plan, el mismo se dará de baja
          automáticamente al final de su periodo de facturación actual.
        </p>
        <p className={styles.claustext}>
          Para cancelar el Plan, el Usuario deberá ingresar a la sección
          “Contrataciones” en su panel de anunciante.
        </p>
        <p className={styles.claustittle}>
          <b>3. FACTURACIÓN Y PAGO.:</b>
        </p>
        <p className={styles.claustext}>
          El Plan será facturado al Usuario por mes adelantado.
        </p>
        <p className={styles.claustext}>
          Para la activación del Plan contratado, se deberá acreditar el pago de
          la primera factura.
        </p>
        <p className={styles.claustittle}>
          <b>4. FORMA DE PAGO.:</b>
        </p>
        <p className={styles.claustext}>
          El pago de la facturación se realizará por débito automático mediante
          las tarjetas autorizadas por mercadopagos.
        </p>
        <p className={styles.claustittle}>
          <b>5. MORA. FALTA DE PAGO. INCUMPLIMIENTOS.:</b>
        </p>
        <p className={styles.claustext}>
          La mora en el pago y/o en el cumplimiento de las obligaciones asumidas
          por el Usuario en estos Terminos de Contratación por E-commerce será
          automática, sin necesidad de notificación judicial o extrajudicial
          alguna. La falta de pago en término facultará suspender inmediatamente
          el Plan hasta su efectivo pago, sin que ello genere derecho al Usuario
          a reclamo ni indemnización alguna.
        </p>
        <p className={styles.claustittle}>
          <b>6. TERMINACIÓN.:</b>
        </p>
        <p className={styles.claustext}>
          Mikasa Nueva podrá terminar anticipadamente la relación contractual
          con el Usuario y por ende la prestación del Plan, sin necesidad de
          invocar causa alguna, debiendo al efecto preavisar en forma fehaciente
          con por lo menos treinta (30) días de anticipación a la fecha de
          terminación.
        </p>
        <p className={styles.claustittle}>
          <b>7. ACCESO AL SITIO WEB.:</b>
        </p>
        <p className={styles.claustext}>
          El Usuario se obliga a abstenerse de utilizar el Sitio Web con fines o
          efectos ilícitos, lesivos de los derechos e intereses de terceros, o
          que de cualquier forma puedan dañar, inutilizar, sobrecargar o
          deteriorar el Sitio Web o impedir la normal utilización del Sitio Web
          por parte de los Usuarios.
        </p>
        <p className={styles.claustext}>
          Reglas generales: Los Usuarios tienen prohibido utilizar el Sitio Web
          para transmitir, distribuir, almacenar o destruir material de forma
          que se infrinjan derechos de terceros o se viole la confidencialidad,
          honor, privacidad, imagen u otros derechos personales de otras
          personas.
        </p>
        <p className={styles.claustittle}>
          <b>8. MENORES DE EDAD.:</b>
        </p>
        <p className={styles.claustext}>
          Queda prohibida la utilización del Sitio Web y/o de los Servicios
          ofrecidos a través del mismo por personas que carezcan de capacidad
          legal para contratar o menores de edad .
        </p>
        <p className={styles.claustittle}>
          <b>9. RESPONSABILIDAD DEL USUARIO.:</b>
        </p>
        <p className={styles.claustext}>
          El Usuario declara y acepta que el uso del Sitio Web sus Servicios y
          los contenidos se efectúa bajo su única y exclusiva responsabilidad .
        </p>
        <p className={styles.claustittle}>
          <b>10. EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD.:</b>
        </p>
        <p className={styles.claustext}>
          Atento al estado de la técnica y a la estructura y funcionamiento de
          las redes, el Sitio Web no puede confirmar que cada Usuario es quien
          dice ser.
        </p>
        <p className={styles.claustext}>
          El sitio no garantiza la veracidad de los datos personales y/o
          contenidos de cada mensaje efectuados y/o publicados en los Canales
          por el Usuario. El Usuario acepta voluntariamente que el acceso a y/o
          el uso de los Canales tiene lugar, en todo caso, bajo su exclusiva y
          única responsabilidad.
        </p>
      </article>
    </div>
  );
};

export default Terms;
