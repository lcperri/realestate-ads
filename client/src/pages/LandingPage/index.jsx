import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const onCLickBtnSearch = (e) => {
    setLocation(location);
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    dispatch(filter({}, location, ""));
  }, [location]);

  return (
    <>
      {/* <!-- Header Section --> */}
      <div id="home" className={styles.home}>
        <div className={styles.headercontainer}>
          {/* <!-- Showcase Area className={styles.showcase}--> */}
          <div className={styles.searchBarTextContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.text}>
                Encuentra tu Casa/Departamento
                <br />
                Nuevo y Accesible
              </h1>
            </div>
            <form className={styles.searchBarContainer}>
              <input
                type="text"
                name="location"
                placeholder="Ciudad"
                value={location}
                onChange={handleInputChange}
                className={styles.inputcontainer}
              />

              <Link to={"/home"}>
                <input
                  className={styles.searchbtn}
                  type="submit"
                  value="buscar"
                  onClick={(e) => onCLickBtnSearch(e)}
                />
              </Link>
            </form>

            <div className={styles.contact}>
              <p className={styles.tel}>(011) 1203-4567</p>
              <p className={styles.address}>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

        <div id="how-it-works" className={styles.howitworksContainer}>
          <article className={styles.postTittleContainer}>
            <h1 className={styles.HowToPostDescription}>
              ¿Cómo Publico mi Propiedad?
            </h1>
            <p className={styles.HowToPostDescription}>
              Publica el alquiler o la venta de: departamentos, casas, terrenos
              u otras propiedades.
            </p>
          </article>
          <div className={styles.howitworksboxesContainer}>
            <div className={styles.firstStep}>
              <h3 className={styles.stepTittle}>
                01. Debes Registrarte en la Pagina
              </h3>
              <p className={styles.stepDescrpt}>
                Haz click en la opcion Registrase de la barra de navegacion.
                Completa tu perfil.
              </p>
              <p className={styles.firststepKeyWord}>Registrate</p>
            </div>
            <div className={styles.nextStep}>
              <h3 className={styles.stepTittle}>02. Ingresa a tu Perfil</h3>
              <p className={styles.stepDescrpt}>
                Haz click en la opcion Iniciar Sesion de la barra de navegacion.
                Compra el plan de publicacion que mas te convenga y completa el
                formulario de tu propiedad.
              </p>
              <p className={styles.firststepKeyWord}>Compra un Plan</p>
            </div>
            <div className={styles.nextStep}>
              <h3 className={styles.stepTittle}>
                03. Contactate con tu cliente
              </h3>
              <p className={styles.stepDescrpt}>
                Los clientes te contactaran a los medios que tu prefieras.
              </p>
              <p className={styles.firststepKeyWord}>Contacta a tu Cliente</p>
            </div>
          </div>
        </div>

        {/* used Technologies */}

        <div id="Technologies" className={styles.usedTechnoliogiesContainer}>
          <h1 className={styles.usedTechnoliogiesTittle}>
            Tecnologias usadas en el Proyecto
          </h1>

          <div className={styles.usedTechnologiesArticleContainer}>
            <article className={styles.articleContainer}>
              <p className={styles.technologyName}>Node.</p>
              <p className={styles.technologyName}>MongoDB.</p>
              <p className={styles.technologyName}>Mongoose.</p>
              <p className={styles.technologyName}>Express.</p>
              <p className={styles.technologyName}>Typescript.</p>
              <p className={styles.technologyName}>Typegoose.</p>
              <p className={styles.technologyName}>Google Calendar.</p>
              <p className={styles.technologyName}>JSON Web Token.</p>
            </article>
            <article className={styles.articleContainer}>
              <p className={styles.technologyName}>React.</p>
              <p className={styles.technologyName}>JavaScript.</p>
              <p className={styles.technologyName}>React-Router-Dom.</p>
              <p className={styles.technologyName}>Redux.</p>
              <p className={styles.technologyName}>Redux-Thunk.</p>
              <p className={styles.technologyName}>Axios.</p>
              <p className={styles.technologyName}>Styled Components.</p>
              <p className={styles.technologyName}>Sweetalert.</p>
            </article>
            <article className={styles.articleContainer}>
            <p className={styles.technologyName}>Cloudinary React.</p>
            <p className={styles.technologyName}>React Google Login.</p>
            <p className={styles.technologyName}>React Google Maps.</p>
            
            </article>
          </div>
        </div>

        {/* <!-- Agents --> */}



        <section id="agents" className={styles.Staffback}>
          <div className={styles.Staffcontainer}>
            <div className={styles.Stafftitle}>
              <h2>Conoce a Nuestro Equipo</h2>
            </div>

            
            <div className={styles.StaffCardsContainer}>


              <div className={styles.Staffcard}>

                
                  <img
                    src="https://ca.slack-edge.com/TPRS7H4PN-U02KJCRURT7-469f4b2ce25d-512"
                    alt="Agent 1"
                    className={styles.StaffCardimg}
                  />
             

                <div className={styles.agentcardcontent}>
                  <div className={styles.agentname}>
                    <h3 className={styles.agentnameh3}>Full Stack Developer</h3>
                    <p>Luis Carlos Perez Rios</p>
                  </div>
                </div>
              </div>



              <div className={styles.Staffcard}>
                
                  <img
                  className={styles.StaffCardimg}
                    src="https://ca.slack-edge.com/TPRS7H4PN-U02QW9S15AQ-8eb1e43f87ac-512"
                    alt="Agent 1"
                  />
               
                <div className={styles.agentcardcontent}>
                  <div className={styles.agentname}>
                    <h3 className={styles.agentnameh3}>Full Stack Developer</h3>
                    <p>Emilio Conde</p>
                  </div>
                </div>
              </div>


              <div className={styles.Staffcard}>
                
                  <img
                    src="https://ca.slack-edge.com/T013Z1B5U3X-U02NGSRA4MP-0909ffec6388-512"
                    alt="Agent 1"
                    className={styles.StaffCardimg}
                  />
                
                <div className={styles.agentcardcontent}>
                  <div className={styles.agentname}>
                    <h3 className={styles.agentnameh3}>Full Stack Developer</h3>
                    <p>Julian Meraviglia</p>
                  </div>
                </div>
              </div>


              <div className={styles.Staffcard}>
                
                  <img
                    src="https://ca.slack-edge.com/TPRS7H4PN-U02DJ88DRFW-d106b546b6cc-512"
                    alt="Agent 1"
                    className={styles.StaffCardimg}
                  />
                
                <div className={styles.agentcardcontent}>
                  <div className={styles.agentname}>
                    <h3 className={styles.agentnameh3}>Full Stack Developer</h3>
                    <p>Marcos Forasteire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        {/* <!-- Footer --> */}
        <footer className={styles.footer}>
          <div className={styles.footercontainer}>

            
              <div className={styles.footerdatacontainer}>
                
                  <h3 className={styles.footerdatacontainerh3}>Mikasa Nueva</h3>
                  <p className={styles.footerdatacontainerp}>© 2022 - Mikasa Nueva, Marca Registrada</p>
                
              </div>

              {/* <div className={styles.footerdatacontainer}>
                <h3 className={styles.footerdatacontainerh3}>Mikasa Nueva</h3>
                
              </div> */}
              <div className={styles.footerdatacontainer}>
                
                
                <Link to={"/terms"}>
                  
                    <h3 className={styles.footerTerms}>Terminos y Condiciones</h3>
                  
                  </Link>
                 
              
              </div>
           
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
