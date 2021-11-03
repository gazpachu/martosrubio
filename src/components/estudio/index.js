import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Estudio = props => {
  return (
    <Fragment>
      <h1>Estudio</h1>
      <img src="/photos/other/estudio-1.jpg" alt="estudio" width="100%" className="home" />
      <img src="/photos/other/estudio-2.jpg" alt="estudio" width="100%" className="home" />
      <img src="/photos/other/estudio-3.jpg" alt="estudio" width="100%" className="home" />
      <img src="/photos/other/estudio-4.jpg" alt="estudio" width="100%" className="home" />
      <img src="/photos/other/estudio-5.jpg" alt="estudio" width="100%" className="home" />
      <Helmet>
        <title>Estudio - Milagros Martos Rubio</title>
        <meta name="description" content="Fotos del estudio"></meta>
      </Helmet>
    </Fragment>
  );
}

export default Estudio;
