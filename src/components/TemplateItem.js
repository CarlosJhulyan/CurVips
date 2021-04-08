import React from 'react';
import { CirclePicker } from 'react-color';

const TemplateItem = ({ image }) => {
  return (
    <div className='template-item'>
      <img className='template-item__image' src={image} alt={`Plantilla de ${image}`} />
      <CirclePicker width='100%' colors={['#e91e63', '#9c27b0', '#4caf50', '#cddc39', '#ffc107', '#607d8b']} circleSpacing={5} />
    </div>
  );
};

export default TemplateItem;
