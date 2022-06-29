import React from "react";
import { Link } from "react-router-dom";

import styles from "./Landing.module.css";

import fotoJuanCarlos from "./img/Juan Carlos.jpg";

const LandingPage = () => {
  return (
    <div id="home" className={styles.home}>
      {/* <!-- Navbar --> */}
      <nav className={styles.mainnav}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <a href="index.html">
                <img src="./img/logo.png" alt="logo" />
              </a>
            </div>
            <input type="checkbox" className={styles.check} />
            <label for="check" className={styles.checkbtn}>
              <i className={styles.fasfabars}></i>
            </label>
            <div className={styles.navigation}>
              <ul>
                <li>
                  <a href="home">Home</a>
                </li>

                <li>
                  <a href="#how-it-works">Publicar</a>
                </li>
                <li>
                  <a href="#agents">Nosotros</a>
                </li>
              </ul>
            </div>
            <div className={styles.join}>
              <ul>
                <li>
                  <a href>Registrarse</a>
                </li>
                <li>
                  <a className={styles.btnbtnprimary} href>
                    Ingresar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Header Section --> */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerarea}>
            {/* <!-- Showcase Area --> */}
            <div className={styles.showcase}>
              <div className={styles.showcasecontent}>
                <h1>
                  Encuentra Tu Departamento
                  <br />
                  Nuevo Y Accesible
                </h1>
                <form className={styles.formgroup}>
                  <i className={styles.fasfasearch}></i>
                  <input type="text" name="location" placeholder="Ciudad" />
                  <Link to={"/home"}>
                    <input
                      className={`${styles.btn} ${styles.searchbtn}`}
                      type="submit"
                      value="Buscar"
                    />
                  </Link>
                </form>
              </div>
              <div className={styles.showcaseimg}>
                <div className={styles.showcaseimgcontent}>
                  <div className={styles.number}>
                    <i className={styles.fasfaphonealt}></i>
                    <p>(011) 1203-4567</p>
                  </div>
                  <div className={styles.location}>
                    <i className={styles.fasfamapmarkeralt}></i>
                    <p>Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className={styles.howitworks}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>¿Como Publico mi Propiedad?</h2>
            <p>
              Publica el alquiler o la venta de: departamentos, casas, terrenos
              u otras propiedades.
            </p>
          </div>
          <div className={styles.boxes}>
            <div className={`${styles.box} ${styles.yellowbox}`}>
              <h3>01. Debes Registrarte en la Pagina</h3>
              <p>
                Haz click en la opcion Registrase de la barra de navegacion.
                Completa tu perfil.
              </p>
              <p className={styles.strong}>Registrate</p>
            </div>
            <div className={styles.box}>
              <h3>02. Ingresa a tu Perfil</h3>
              <p>
                Haz click en la opcion Ingresar de la barra de navegacion.
                Compra el plan de publicacion que mas te convengay completa el
                formulario de tu propiedad.
              </p>
              <p className={styles.strong}>Compra un Plan</p>
            </div>
            <div className={styles.box}>
              <h3>03. Contactate con tu cliente</h3>
              <p>Los clientes te contactaran a los medios que tu prefieras.</p>
              <p className={styles.strong}>Contacta a tu Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Agents --> */}
      <section id="agents" className={styles.agents}>
        <div className={styles.agentscontainer}>
          <div className={styles.agenttitle}>
            <h2>Conoce a Nuestro Staff Ejecutivo</h2>
            <p></p>
          </div>
          <div className={styles.agentcardboxes}>
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img
                  src="https://ca.slack-edge.com/TPRS7H4PN-U02KJCRURT7-469f4b2ce25d-512"
                  alt="Agent 1"
                />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Presidente</h3>
                  <p>Luis Carlos Perez Rios</p>
                </div>
                <div className={styles.agentsocial}>
                  <a href>
                    <i className={`${styles.fab} ${styles.fafacebookf}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fatwitter}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fainstagram}`}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img
                  src="https://ca.slack-edge.com/TPRS7H4PN-U02QW9S15AQ-8eb1e43f87ac-512"
                  alt="Agent 1"
                />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Vicepresidente</h3>
                  <p>Emilio Conde</p>
                </div>
                <div className={styles.agentsocial}>
                  <a href>
                    <i className={`${styles.fab} ${styles.fafacebookf}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fatwitter}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fainstagram}`}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img
                  src="https://ca.slack-edge.com/T013Z1B5U3X-U02NGSRA4MP-0909ffec6388-512"
                  alt="Agent 1"
                />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Director de Seguridad</h3>
                  <p>Julian Meraviglia</p>
                </div>
                <div className={styles.agentsocial}>
                  <a href>
                    <i className={`${styles.fab} ${styles.fafacebookf}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fatwitter}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fainstagram}`}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img
                  src="https://ca.slack-edge.com/TPRS7H4PN-U02DJ88DRFW-d106b546b6cc-512"
                  alt="Agent 1"
                />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Director de Sistemas</h3>
                  <p>Marcos Forasteire</p>
                </div>
                {/* <div className={styles.agentsocial}>
                  <a href>
                    <i className={`${styles.fab} ${styles.fafacebookf}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fatwitter}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fainstagram}`}></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img src={fotoJuanCarlos} alt="Agent 1" />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Gerente de Ciberseguridad</h3>
                  <p>Juan Carlos Padierna Rueda</p>
                </div>
                <div className={styles.agentsocial}>
                  <a href>
                    <i className={`${styles.fab} ${styles.fafacebookf}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fatwitter}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fainstagram}`}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img
                  src="https://ca.slack-edge.com/TPRS7H4PN-U02TN5HEECQ-ccf2f56bb019-512"
                  alt="Agent 1"
                />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Gerente de Infraestructura</h3>
                  <p>Micaela Fronti</p>
                </div>
                <div className={styles.agentsocial}>
                  <a href>
                    <i className={`${styles.fab} ${styles.fafacebookf}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fatwitter}`}></i>
                  </a>
                  <a href>
                    <i className={`${styles.fab} ${styles.fainstagram}`}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerinner}>
            <div className={styles.footercopyright}>
              <div className={styles.logo}>
                <h3>Henrystate</h3>
                <p>© 2022 - Henrystate, Marca Registrada</p>
              </div>
            </div>
            <div className={styles.footerluxestate}>
              <h3>Henrystate</h3>
              <ul>
                <li>
                  <a href>Staff</a>
                </li>
                {/* <li>
                  <a href>Hunters</a>
                </li> */}
              </ul>
            </div>
            <div className={styles.footercompany}>
              <h3>Empresa</h3>
              <ul>
                <li>
                  <a href>Acerca</a>
                </li>
                <li>
                  <a href>FAQ</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a href>Social</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerproduct}>
              <h3>Productos</h3>
              <ul>
                <li>
                  <a href>Publicaciones</a>
                </li>
                {/* <li>
                  <a href>How It Works</a>
                </li> */}
              </ul>
            </div>
            <div className={styles.footerservices}>
              {/* <h3>Services</h3>
              <ul>
                <li>
                  <a href>Selling</a>
                </li>
                <li>
                  <a href>Renting</a>
                </li>
                <li>
                  <a href>Building</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- JQuery CDN -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script src="./main.js"></script> */}
    </div>
  );
};

export default LandingPage;
