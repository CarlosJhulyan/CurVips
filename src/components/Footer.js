import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer-sections'>
        <div className='footer-section'>
          <h3 className='footer-section__title'>Curriculum Vitae</h3>
          <ul className='footer-section-list'>
            <a className='footer-section-list__link' href='https://'>Crea tu CV al instante</a>
            <a className='footer-section-list__link' href='https://'>Obtén tu dashboard</a>
            <a className='footer-section-list__link' href='https://'>Ver todas las plantillas</a>
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-section__title'>CurVips</h3>
          <ul className='footer-section-list'>
            <a className='footer-section-list__link' href='https://'>Sobre Nosotros</a>
            <a className='footer-section-list__link' href='https://'>Contáctanos</a>
            <a className='footer-section-list__link' href='https://'>Preguntas Frecuentes</a>
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-section__title'>Términos y Legalidad</h3>
          <ul className='footer-section-list'>
            <a className='footer-section-list__link' href='https://'>Términos de Servicio</a>
            <a className='footer-section-list__link' href='https://'>Aviso Legal</a>
            <a className='footer-section-list__link' href='https://'>Privacidad</a>
          </ul>
        </div>

      </section>
      <section className='footer__copyright'>All Rights Reserved 2021 &copy; CurVips</section>
    </footer>
  );
}

export default Footer;
