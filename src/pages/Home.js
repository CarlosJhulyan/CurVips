import React from 'react';
import { Row, Col, Button, Empty, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import Background from '../assets/images/fondo-empresa.jpg';

function Home() {
  const { Panel } = Collapse;
  return (
    <>
      <section className='container'>
        <h1 className='container__title'>¡Comienza Ahora!</h1>
        <Row>
          <Col span={12} className='home-start'>
            <Empty />
            <Button className='home-start__button home-start__button--success' size='large' type='primary'><Link to='/register'>Obtén tu dashboard</Link></Button>
            <ul className='home-start-list'>
              <li className='home-start-list__item'>El registro es totalmente gratis y tendras acceso libre.</li>
              <li className='home-start-list__item'>Tendrás acceso a tu dashboard propio donde podrás manejar tus CV creados con aterioridad.</li>
              <li className='home-start-list__item'>Exportar tus CV en formatos de alta calidad: PDF, Word, PNG y compartir a tus redes sociales.</li>
            </ul>
          </Col>
          <Col span={12} className='home-start'>
            <Empty />
            <Button className='home-start__button' size='large' type='primary'><Link to='/app'>Créa tu CV al instante</Link></Button>
            <ul className='home-start-list'>
              <li>Podrás crear tu CV sin registrarte de forma instantanea y rápida.</li>
              <li>Tendrás acceso a todas las plantillas.</li>
              <li>Al finalizar tu CV podrás exportar en formato pdf y compartir en tus redes sociales.</li>
              <li>Al no tener una cuenta, se perdera tu CV.</li>
            </ul>
          </Col>
        </Row>
      </section>

      <div style={{ background: '#0070FF' }}>
        <section className='container'>
          <Row>
            <Col span={8} className='home-templates'>
              <h2 className='container__title container__title--white'>Plantillas de CV listas para usar y personalizar a tu gusto</h2>
              <p className='home-templates__description'>
                Conquista a empleadores y encargados de contratación usando una de nuestras 18 elegantes plantillas de CV diseñadas profesionalmente. Descargable en Word o PDF.
              </p>
              <Button size='large'>Mira nuestras plantillas</Button>
            </Col>
            <Col span={16}>
              <Empty />
            </Col>
          </Row>
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
          <Collapse ghost>
            <Panel header='¿Cómo puedo usar CurriV de forma gratuita?' key={1}>
              CurriV puedes usarlo 100 % de forma gratuita sin tener que introducir los datos de tu tarjeta de crédito. Tiene dos modalidades, el primero es una forma muy rapida e instantanea de crear un CV sin tener que registrarte, pero al salir de la sesión no tendras forma de recuperar tu CV y la segunda forma es registrandote y podras tener tu propio dashboard donde manejaras tus Curriculos y gestionar tu cuenta.
            </Panel>
            <Panel header='¿Cómo puedo cargar o editar la foto de mi currículum?' key={2}>
              sd
            </Panel>
            <Panel header='¿Puedo descargar mi currículum en formato Word o PDF?' key={3}>
              sd
            </Panel>
            <Panel header='¿Cómo puedo personalizar mi currículum vitae?' key={4}>
              sd
            </Panel>
            <Panel header='¿Cómo puedo compartir mi currículum?' key={5}>
              sd
            </Panel>
            <p style={{ marginTop: '20px' }}>
              ¿No encontraste lo que estabas buscando? -
              <Link to='/help'>Consulta las preguntas frecuentes</Link>
            </p>
          </Collapse>
        </section>
      </div>

      <section className='container'>
        <h1 className='container__title container__title--large'>Únete a 4 usuarios en todo el mundo</h1>
        <h2 className='home-start__resume'>¡Empieza gratis! Regístrate ahora y obtén tu editor de CV</h2>
        <Button className='home-start__button home-start__button--success' size='large' type='primary'><Link to='/register'>Obtén tu dashboard</Link></Button>
      </section>
    </>
  );
}

export default Home;
