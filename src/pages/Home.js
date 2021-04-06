import React from 'react';
import Background from '../assets/images/fondo-empresa.jpg';

function Home() {
  return (
    <>
      <section className='container'>
        <h1 className='container__title'>¡Comienza Ahora!</h1>
      </section>

      <div style={{ background: '#0070FF' }}>
        <section className='container'>
          <h2 className='container__title container__title--white'>Plantillas de CV listas para usar y personalizar a tu gusto</h2>
        </section>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={Background} alt='Fondo' style={{ width: '100%', position: 'absolute', opacity: 0.1, pointerEvents: 'none' }} />
        <section className='container'>
          <h2 className='container__title container__title--small'>¿Cómo funciona?</h2>
        </section>
      </div>

      <div style={{ background: '#BCD5FF' }}>
        <section className='container'>
          <h2 className='container__title container__title--dark'>Preguntas más frecuentes</h2>
        </section>
      </div>

      <section className='container'>
        <h1 className='container__title container__title--large'>Únete a 4 usuarios en todo el mundo</h1>
      </section>
    </>
  );
}

export default Home;
