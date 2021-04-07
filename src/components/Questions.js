import React from 'react';
import { Collapse } from 'antd';

function Questions() {
  const { Panel } = Collapse;
  return (
    <Collapse className='' defaultActiveKey={1} bordered={false} accordion>
      <Panel header='¿Cómo puedo usar CurriV de forma gratuita?' key={1}>
        <p>CurVips puedes usarlo 100 % de forma gratuita sin tener que introducir los datos de tu tarjeta de crédito. Tiene dos modalidades, el primero es una forma muy rapida e instantanea de crear un CV sin tener que registrarte, pero al salir de la sesión no tendras forma de recuperar tu CV y la segunda forma es registrandote y podras tener tu propio dashboard donde manejaras tus Curriculos y gestionar tu cuenta.</p>
      </Panel>
      <Panel header='¿Cómo puedo cargar o editar la foto de mi currículum?' key={2}>
        <p>text 2</p>
      </Panel>
      <Panel header='¿Puedo descargar mi currículum en formato Word o PDF?' key={3}>
        <p>text 3</p>
      </Panel>
      <Panel header='¿Cómo puedo personalizar mi currículum vitae?' key={4}>
        <p>text 3</p>
      </Panel>
      <Panel header='¿Cómo puedo compartir mi currículum?' key={5}>
        <p>text 3</p>
      </Panel>
      <Panel header='¿Cómo me puedo registrar en CurriV?' key={6}>
        <p>text 3</p>
      </Panel>
      <Panel header='¿Cómo puedo previsualizar mi currículum y mi carta de presentación?' key={7}>
        <p>text 3</p>
      </Panel>
      <Panel header='¿Mi currículum o carta de presentación serán públicos?' key={8}>
        <p>text 3</p>
      </Panel>
    </Collapse>
  );
}

export default Questions;
