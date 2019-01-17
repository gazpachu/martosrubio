import React, { Fragment } from 'react';
import Estudio1 from '../../assets/estudio-1.jpg';
import Estudio2 from '../../assets/estudio-2.jpg';
import Estudio3 from '../../assets/estudio-3.jpg';
import Estudio5 from '../../assets/estudio-5.jpg';
import Estudio6 from '../../assets/estudio-6.jpg';

const Estudio = props => {
  return (
    <Fragment>
      <h1>Estudio</h1>
      <img src={Estudio1} alt="estudio" width="100%" className="home" />
      <img src={Estudio2} alt="estudio" width="100%" className="home" />
      <img src={Estudio3} alt="estudio" width="100%" className="home" />
      <img src={Estudio5} alt="estudio" width="100%" className="home" />
      <img src={Estudio6} alt="estudio" width="100%" className="home" />
    </Fragment>
  );
}

export default Estudio;
