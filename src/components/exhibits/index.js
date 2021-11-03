import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import "./styles.css";

const Exhibits = (props) => {
  return (
    <Fragment>
      <section>
      <h1>Exposiciones</h1>
        <div className="exhibits">
          <img
            src="/photos/exposiciones/exposicion-blauart-2021.jpg"
            alt="Exposición de invierno (Colectivo Blauart)"
          />
          <div>
            Exposición de invierno (Colectivo Blauart). Inauguración el Sábado 13 de Noviembre de 2021 a las 19h
          </div>
          <img
            src="/photos/exposiciones/expo-ravi-cafe.jpg"
            alt="Exposición de dibujos y pinturas hasta el 3 de Diciembre de 2016"
          />
          <div>
            Exposición de dibujos y pinturas hasta el 3 de Diciembre de 2016. El
            color, la línea y la mancha. Distintas miradas
          </div>
          <img
            src="/photos/exposiciones/expo-blauart.jpg"
            alt="Exposición de dibujos y pinturas hasta el 3 de Diciembre de 2016"
          />
          <div>
            Exposición “Del.Verde.Al.Carmesí”. Desde el Viernes, 1 de Abril a
            las 19:00, hasta el 26 de Abril a las 22:00
          </div>
        </div>
      </section>
      <Helmet>
        <title>Exposiciones - Milagros Martos Rubio</title>
        <meta name="description" content="Exposiciones"></meta>
      </Helmet>
    </Fragment>
  );
};

export default Exhibits;
