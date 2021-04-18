import React from 'react';
import { List, Space, Avatar } from 'antd';
import { StarOutlined, LikeOutlined } from '@ant-design/icons';
import Image from '../assets/images/templates/2021-04-04_18h39_17.png';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Dashboard = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      id: i,
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      liked: i + 12,
      stars: i + 23,
      image: Image,
    });
  }

  return (
    <List itemLayout='vertical' size='large' dataSource={listData} pagination={{ pageSize: 4 }} renderItem={(item) => <ItemList key={item.id} item={item} />} />
  );
};

function ItemList({ item }) {
  const { Item } = List;
  return (
    <Item actions={[<IconText icon={StarOutlined} text={item.stars} key='start' />, <IconText icon={LikeOutlined} text={item.liked} key='liked' />]}>
      <Item.Meta avatar={<Avatar src={item.avatar} />} title={<a href={`/dashboard/cv/${item.title}`}>{item.title}</a>} description={item.description} />
    </Item>
  );
}

export default Dashboard;
