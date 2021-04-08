import React from 'react';
import { Tabs } from 'antd';
import { SolutionOutlined, BgColorsOutlined, FileOutlined, ReconciliationOutlined, SlidersOutlined } from '@ant-design/icons';
import TemplatesGroup from '../components/TemplatesGroup';

import Image1 from '../assets/images/templates/2021-04-04_18h37_44.png';
import Image2 from '../assets/images/templates/2021-04-04_18h39_09.png';
import Image3 from '../assets/images/templates/2021-04-04_18h38_01.png';
import Image4 from '../assets/images/templates/2021-04-04_18h38_28.png';

import Image5 from '../assets/images/templates/2021-04-04_22h54_57.png';
import Image6 from '../assets/images/templates/2021-04-04_22h54_31.png';
import Image7 from '../assets/images/templates/2021-04-04_22h54_43.png';
import Image8 from '../assets/images/templates/2021-04-04_18h39_30.png';

const TabIconHead = ({ Icon, title }) => (
  <span>
    <Icon />
    {title}
  </span>
);

const Templates = () => {
  const { TabPane } = Tabs;

  return (
    <>
      <section className='container'>
        <h1 className='container__title'>Plantillas de CV</h1>
        <h4 className='container-templates__subtitle'>Cada plantilla se ha estructurado cuidadosamente para seguir las «reglas de currículum» que buscan los responsables de contratación. Destaca entre el resto de los candidatos y consigue que te contraten antes con plantillas de currículum probadas.</h4>
        <Tabs className='container-templates__tabs'>
          <TabPane tab={<TabIconHead Icon={SolutionOutlined} title='Todo' />} key={1}>
            <TemplatesGroup images={[Image1, Image2, Image3, Image4]} />
          </TabPane>
          <TabPane tab={<TabIconHead Icon={FileOutlined} title='Simples' />} key={2}>
            <TemplatesGroup images={[Image5, Image6, Image7, Image8]} />
          </TabPane>
          <TabPane tab={<TabIconHead Icon={BgColorsOutlined} title='Creativos' />} key={3}>
            <TemplatesGroup images={[Image1, Image2, Image3, Image4]} />
          </TabPane>
          <TabPane tab={<TabIconHead Icon={SlidersOutlined} title='Modernos' />} key={4}>
            <TemplatesGroup images={[Image5, Image6, Image7, Image8]} />
          </TabPane>
          <TabPane tab={<TabIconHead Icon={ReconciliationOutlined} title='Profesionales' />} key={5}>
            <TemplatesGroup images={[Image1, Image2, Image3, Image4]} />
          </TabPane>
        </Tabs>
      </section>
      <section className='container-templates-sec'>
        <div className='container'>
          <h6>¿Cómo elegir la plantilla de currículum perfecta?</h6>
          <p>
            Desde un salario mejor hasta competencias nuevas: un nuevo trabajo puede abrir todo un mundo de posibilidades. Pero sin el currículum perfecto es muy difícil entrar en el mercado laboral actual, cada vez más competitivo. Y aquí es donde puede ayudarte CVapp.es, brindándote las herramientas y recursos necesarios para escribir el mejor currículum, que muestre tus atributos más destacados y haga que te contraten en un abrir y cerrar de ojos.
            <br />
            <br />
            A la hora de elegir la plantilla de currículum perfecta, puede que te sientas abrumado por todas las opciones que hay. ¡No te preocupes! Con unas cuantas reglas supersencillas puedes reducir el campo a solo las mejores plantillas que encajen bien con tu perfil. A partir de ahí, ya elijes tú. No hay ninguna norma que te impida mostrar tu personalidad y eso que te hace realmente único.
            <br />
            <br />
            En CVapp.es entendemos que buscar trabajo es un proceso estresante. Por eso nuestra misión es hacerlo lo más sencillo posible. Esto significa que te ofrecemos las mejores plantillas para currículos, una herramienta de creación de CV sin complicaciones, y guías gratuitas en línea. Después de iniciar sesión puedes descargar tu currículum de forma gratuita en formato .txt para poder diseñarlo a tu manera. Para facilitarte todavía más las cosas, también puedes descargar nuestras plantillas en formato PDF.
            <br />
            <br />
            Entonces, ¿a qué estás esperando? Empieza ya a usar nuestras plantillas de curriculum vitae en línea. Los siguientes consejos tienen el objetivo de guiarte para elegir la mejor plantilla de currículum profesional, consiguiendo no un trabajo cualquiera sino el puesto de tus sueños, capaz de abrirte las puertas de un excelente futuro profesional. ¡Empecemos!
          </p>
          <h6>Los 10 mejores consejos para elegir una plantilla de currículum</h6>
          <ul>
            <li>Conoce las normas de tu sector</li>
            <li>Familiarízate con el tono de voz de tu empresa</li>
            <li>Decide la imagen de ti mismo que quieres presentar</li>
            <li>Sopesa qué secciones son las más importantes para tu carrera profesional</li>
            <li>Piensa dónde necesitarás redactar párrafos más extensos</li>
            <li>Valora la presentación y el poder de atracción de la plantilla</li>
            <li>Presta atención a los iconos y los colores y si son apropiados para tu sector</li>
            <li>Comprueba si hay espacio para una foto o un logo, o si de verdad necesitas incluirlos</li>
            <li>Evalúa la sección más llamativa y asegúrate de que se ajusta a tus necesidades</li>
            <li>Elige el currículum que mejor capta tu estilo personal y con el que te sientes cómodo.</li>
          </ul>
          <h6>Qué hace de una plantilla que sea buena</h6>
          <p>
            La mayoría de los currículos contiene los mismos elementos básicos: información de contacto, un resumen del perfil y secciones de experiencia, estudios, competencias y logros. Aunque nuestra herramienta de creación de currículos facilita la adición o eliminación de secciones basándote en tu sector y tus necesidades, es buena idea comenzar con una plantilla que te ofrezca las mejores posibilidades de personalización. Los mejores diseños hacen que la información sea atractiva y clara, con el equilibrio adecuado entre texto y espacio en blanco. El color y los iconos deben utilizarse en función de las mejores prácticas de tu sector, y el incluir o no una foto a veces depende del país en que pretendes trabajar.
            <br />
            <br />
            Nuestras plantillas están diseñadas por expertos para que toda la información quepa en una página (esto es muy recomendable para la mayoría de los sectores y niveles de experiencia), sin que se vea atiborrada o caótica. La combinación de nuestras guías y nuestra herramienta de creación de currículos te ayudarán a crear el mejor diseño, aprovechando al máximo cada elemento.
          </p>
        </div>
      </section>
    </>
  );
};

export default Templates;
