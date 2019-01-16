import React, { Fragment } from 'react';
import './styles.css';
import Otras1 from '../../assets/otras_1.jpg';
import Otras2 from '../../assets/otras_2.jpg';
import Otras3 from '../../assets/otras_3.jpg';

const Curriculum = props => {
  return (
    <Fragment>
      <h1>Curriculum</h1>
      <section className="curriculum">
        <p>MILAGROS MARTOS RUBIO nace en ALMERÍA, el 20 de Enero de 1948. Allí cursa estudios primarios y secundarios.</p>
        <h3>ESTUDIOS</h3>
        <ul>
          <li><strong>1969</strong>: Inicia sus estudios en la Escuela Superior de Bellas Artes de San Fernando (Madrid). En 1972 obtiene la licenciatura</li>
          <li><strong>1972</strong>: realiza un cursillo de pintura al  natural en la Escuela Internacional de pintura mural de San Cugat del Vallés (Barcelona)</li>
          <li><strong>1988</strong>: Seminario de fotografía impartido por “Ouka Lele” y organizado por el Instituto de Cultura “Juan Gil-Albert”</li>
          <li><strong>1997</strong>: participa en el primer Curso Internacional de Artes Plásticas “Villa de Buñol”, impartido por el pintor Antonio López y organizado por el Excmo. Ayuntamiento de Buñol</li>
        </ul>
        <h3>EXPOSICIONES</h3>
        <ul>
          <li><strong>1970</strong>: exposición personal de su obra en la “Sala Villaespesa”, Casa de Cultura de Almería</li>
          <li><strong>1971</strong>: participa en una exposición colectiva en Valladolid y es invitada a participar en la Exposición Nacional de Arte Contemporáneo celebrado en Santurce (Vizcaya)</li>
          <li><strong>1972</strong>: exposición de su obra en la Sala de Exposiciones de la Facultad de Bellas-Artes de  San Fernando (Madrid)</li>
          <li><strong>1975</strong>: exposición colectiva en Galería 11 (Alicante)</li>
          <li><strong>1977</strong>: exposición colectiva en Elche (Alicante)</li>
          <li><strong>1995</strong>: exposición colectiva en la sala de exposiciones del Aula de Cultura de Buñol (Valencia)</li>
          <li><strong>2002</strong>: exposición colectiva “ENCUENTROS” en la sala de Cajamar en Málaga</li>
          <li><strong>2009</strong>: Obra seleccionada para la exposición “Miradas” sobre rincones de Alicante y provincia, organizada por el instituto Juan Gilalbert de Alicante</li>
          <li><strong>2011</strong>: Exposición “Del verde al carmesí” en la <a href="https://www.facebook.com/pages/Blau-Art-Spai-dArt-Contemporani/58543706885">galería BlauART</a> de Alicante</li>
        </ul>
        <h3>PREMIOS</h3>
        <ul>
          <li><strong>1971</strong>: Mención honorífica en el Colegio Mayor Barberán</li>
          <li><strong>1973</strong>: Premio de pintura en el salón de arte “CIUDAD DE PUERTOLLANO”</li>
          <li><strong>1974</strong>: Premio de pintura en el “CERTAMEN DE ARTE” organizado por “El Corte Inglés” (Sevilla)</li>
          <li><strong>1975</strong>: Premio de pintura “HIDALGO DE CAVIEDES” en el concurso internacional de pintura, escultura y dibujo, organizado por el ayuntamiento de Quesada (Jaén)</li>
          <li><strong>1976</strong>: Premio de pintura en concurso organizado por el ayuntamiento de Jódar (Jaén)</li>
        </ul>
        <h3>EXPERIENCIA LABORAL</h3>
        <ul>
          <li><strong>1978</strong>: Ingresa en el Cuerpo de Profesores Agregados de Bachillerato, donde ejerce hasta el año 2008</li>
        </ul>

        <div className="photos">
          <img src={Otras1} alt="En la facultad de Bellas Artes" />
          <div>En la facultad de Bellas Artes</div>
          <img src={Otras2} alt="Yo con el ordenador" />
          <div>Yo con el ordenador</div>
          <img src={Otras3} alt="Mi estudio" />
          <div>Mi estudio</div>
        </div>
      </section>
    </Fragment>
  );
}

export default Curriculum;
