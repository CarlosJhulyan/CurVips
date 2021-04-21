import React from 'react';
import { Tabs } from 'antd';
import { BgColorsOutlined, FileOutlined, ReconciliationOutlined, SlidersOutlined, SolutionOutlined } from '@ant-design/icons';

import TemplatesGroup from './TemplatesGroup';

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

const TemplatesTabs = () => {
  const { TabPane } = Tabs;
  return (
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
  );
};

export default TemplatesTabs;
