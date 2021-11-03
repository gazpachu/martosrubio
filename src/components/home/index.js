import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Home = props => {
  return (
    <Fragment>
      <img src="/photos/other/home.jpg" alt="Yo" width="100%" className="home" />
      <Helmet>
          <title>Milagros Martos Rubio</title>
          <meta name="description" content="Página oficial de la artista visual Milagros Martos Rubio"></meta>
        </Helmet>
    </Fragment>
  );
}

export default Home;
