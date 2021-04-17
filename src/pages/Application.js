import React from 'react';
import { Link } from 'react-router-dom';
import { Progress, Button, Tabs } from 'antd';
import { CloseOutlined, InsertRowRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

import Image from '../assets/images/templates/2021-04-04_18h39_30.png';

function Application() {
  const { TabPane } = Tabs;
  return (
    <div className='application'>
      <div className='application-config'>
        <div className='application-config__progress'>
          <Link to='/'>
            <Button shape='circle' icon={<CloseOutlined />} />
          </Link>
          <Progress percent={50} />
        </div>

        <Tabs>
          <TabPane tab='Personalizar PLantilla' key='1'>
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />
            Personalizar PLantilla
            <br />

          </TabPane>
          <TabPane tab='Datos Personales' key='2'>
            Datos Personales
          </TabPane>
          <TabPane tab='Experiencia Laboral' key='3'>
            Experiencia Laboral
          </TabPane>
          <TabPane tab='Redes Sociales y Sitios Web' key='4'>
            asd
          </TabPane>
          <TabPane tab='Competencias y Habilidades' key='5'>
            Competencias y Habilidades
          </TabPane>
          <TabPane tab='Cursos y Prácticas' key='6'>
            Cursos y Prácticas
          </TabPane>
          <TabPane tab='Idiomas y Hobbies' key='7'>
            Idiomas y Hobbies
          </TabPane>
        </Tabs>
      </div>
      <div className='application-preview'>
        <div className='application-preview__top'>
          <span>Previa Previa</span>
          <div>
            <Button type='link' icon={<LeftOutlined />} />
            2/3
            <Button type='link' icon={<RightOutlined />} />
          </div>
        </div>
        <img src={Image} alt='Vista previa' />
        <div className='application-preview__bottom'>
          <Button type='link' icon={<InsertRowRightOutlined />}>Cambiar plantilla</Button>
          <Button type='primary'>Continuar</Button>
        </div>
      </div>
    </div>
  );
}

export default Application;
