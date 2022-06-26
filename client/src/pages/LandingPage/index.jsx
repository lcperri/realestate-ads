import React from "react";
import styles from "./Landing.module.css";
import apartmentone from "./img/apartment.jpg";

const LandingPage = () => {
  return (
    <div className={styles.home}>
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
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#company-stats">Nuetra Empresa</a>
                </li>
                <li>
                  <a href="#appartments">Departamentos</a>
                </li>
                <li>
                  <a href="#how-it-works">Servicios</a>
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
                  <input
                    className={`${styles.btn} ${styles.searchbtn}`}
                    type="submit"
                    value="Search"
                  />
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
      {/* <!-- Company Statistics --> */}
      <section className={styles.companystats}>
        <div className={styles.container}>
          <div className={styles.statcontent}>
            <div className={styles.statleft}>
              <h2>
                Nuestra Empresa <br />
                Estadisticas
              </h2>
              <p>
                Nos dedicamos a brindar servicios complementarios a la actividad
                inmobiliaria con un fuerte foco en el cliente. No somos una
                inmobiliaria en sí; no estamos en el negocio de la venta o
                alquiler de inmuebles. Nos gusta decir que el nuestro no es un
                negocio de propiedades, sino de relaciones personales.
              </p>
              <p>
                Nuestra misión consiste en ayudarte a encontrar lo que estas
                buscando. Sabemos tus deseos, tus necesidades, te ayudamos en la
                búsqueda de tu nuevo hogar. Muchos usuarios se han enamorado de
                nuestra pagina y nos recomiendan.Nosotros y nuestro equipo de
                150 empleados provechamos para darte la gracias por estos 20
                años juntos. Tenemos 57.000 publicaciones de inmuebles de
                nuestros 10.000 usuarios registrados que nos reconocen como
                lideres en el mercado local.
              </p>
            </div>
            <div className={styles.statright}>
              <div className={styles.statbox}>
                <p className={styles.num}>57.000</p>
                <p>Publicaciones de Inmuebles</p>
              </div>
              <div className={styles.statbox}>
                <p className={styles.num}>10.000</p>
                <p>Usuarios Registrados</p>
              </div>
              <div className={styles.statbox}>
                <p className={styles.num}>150</p>
                <p>Empleados</p>
              </div>
              <div className={styles.statbox}>
                <p className={styles.num}>20</p>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Appartments --> */}
      <section className={styles.appartments}>
        <div className={styles.container}>
          <h2>
            Mas de 5000 <br />
            departamentos en Alquiler
          </h2>
          <div className={styles.appartmentlist}>
            <div className={styles.appartmentitem}>
              <img src={apartmentone} alt="" />
              <h3>Random Street, Apt B453, New York</h3>
              <p className={styles.num}>$3500</p>
            </div>
            <div className={styles.appartmentitem}>
              <img src="./img/apartment.jpg" alt="" />
              <h3>Random Street, Apt B453, New York</h3>
              <p className={styles.num}>$3500</p>
            </div>
            <div className={styles.appartmentitem}>
              <img src="./img/apartment.jpg" alt="" />
              <h3>Random Street, Apt B453, New York</h3>
              <p className={styles.num}>$3500</p>
            </div>
            <div className={styles.appartmentitem}>
              <img src="./img/apartment.jpg" alt="" />
              <h3>Random Street, Apt B453, New York</h3>
              <p className={styles.num}>$3500</p>
            </div>
            <div className={styles.appartmentitem}>
              <img src="./img/apartment.jpg" alt="" />
              <h3>Random Street, Apt B453, New York</h3>
              <p className={styles.num}>$3500</p>
            </div>
            <div className={styles.appartmentitem}>
              <img src="./img/apartment.jpg" alt="" />
              <h3>Random Street, Apt B453, New York</h3>
              <p className={styles.num}>$3500</p>
            </div>
          </div>
          <div className={styles.btngroup}>
            <form className={styles.formgroup}>
              <i className={styles.fasfasearch}></i>
              <input type="text" name="location" placeholder="Ciudad" />
              <input
                className={`${styles.btn} ${styles.searchbtn}`}
                type="submit"
                value="Search"
              />
            </form>
            <button>Mira los Departamentos Destacados</button>
          </div>
        </div>
      </section>
      <section className={styles.howitworks}>
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
      {/* <!-- Services --> */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesinner}>
            <h2>Servicios</h2>
            <p>
              Te ofrecemos la infraestructura informatica mas avanzada. Tu
              publicacion es la primera que ofrecen los buscadores.
            </p>
          </div>
          <div className={styles.servicescontent}>
            <div className={styles.servicesimg}>
              <img src="./img/service-img.jpg" alt="Service Image" />
            </div>
            <div className={styles.servicesdetails}>
              <div className={styles.service1}>
                <h3>Seguridad Informatica</h3>
                <p>
                  Tus datos estan absolutamente protegidos gracias nuestras
                  políticas de seguridad, firewalls, control de fuga de
                  información, autenticación, validación y encriptamiento.
                </p>
              </div>
              <div className={styles.service2}>
                <h3>Publicaciones Reales y Seguras </h3>
                <p>
                  Todas nuestras pubicaciones han sido verificadas por nuestro
                  personal especializado en fraude informatico y garantizamos
                  que son 100% reales.
                </p>
              </div>
              <div className={styles.service3}>
                <h3>Atencion Permanente</h3>
                <p>
                  Nuestro de atencion al cliente brinda una atencion de
                  excelencia a traves de los medios de nuestra pagina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Agents --> */}
      <section className={styles.agents}>
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
                  <h3>Gerente de Seguridad</h3>
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
                <img src="./img/agent-img.jpg" alt="Agent 1" />
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
            <div className={styles.agentcard}>
              <div className={styles.agentimg}>
                <img
                  src="https://ca.slack-edge.com/TPRS7H4PN-U031QQESY85-42fcf03a60a4-512"
                  alt="Agent 1"
                />
              </div>
              <div className={styles.agentcardcontent}>
                <div className={styles.agentname}>
                  <h3>Jefe de Sistemas</h3>
                  <p>Juan Mario Parra D'Errico</p>
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
