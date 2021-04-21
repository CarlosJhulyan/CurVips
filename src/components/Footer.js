import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer-sections'>
        <div className='footer-section'>
          <h3 className='footer-section__title'>Curriculum Vitae</h3>
          <ul className='footer-section-list'>
            <Link className='footer-section-list__link' to='/app'>Crea tu CV al instante</Link>
            <Link className='footer-section-list__link' to='/register'>Obtén tu dashboard</Link>
            <Link className='footer-section-list__link' to='/templates'>Ver todas las plantillas</Link>
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-section__title'>CurVips</h3>
          <ul className='footer-section-list'>
            <Link className='footer-section-list__link' to='/about'>Sobre Nosotros</Link>
            <Link className='footer-section-list__link' to='/contact'>Contáctanos</Link>
            <Link className='footer-section-list__link' to='/help'>Preguntas Frecuentes</Link>
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-section__title'>Términos y Legalidad</h3>
          <ul className='footer-section-list'>
            <Link className='footer-section-list__link' to='/terms'>Términos de Servicio</Link>
            <Link className='footer-section-list__link' to='/legacy'>Aviso Legal</Link>
            <Link className='footer-section-list__link' to='/privacy'>Privacidad</Link>
          </ul>
        </div>

      </section>
      <section className='footer__copyright'>
        All Rights Reserved 2021 &copy;
        <Link to='/'> CurVips </Link>
        | Design by
      </section>
    </footer>
  );
}

export default Footer;
