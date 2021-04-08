import React from 'react';
import TemplateItem from './TemplateItem';

const TemplatesGroup = ({ images = [] }) => {
  return (
    <div className='templates-group'>
      {
        images.map((image) => <TemplateItem image={image} />)
      }
    </div>
  );
};

export default TemplatesGroup;
