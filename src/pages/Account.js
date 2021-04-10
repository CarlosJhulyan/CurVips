import React from 'react';
import { Form, Input, Upload, Avatar } from 'antd';

const Account = () => {
  return (
    <div>
      <Form labelCol={{ span: 4 }}>
        <Form.Item label='Nombre de usuario' name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Nombres' name='surname' rules={[{ message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Apellidos' name='lastname' rules={[{ message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Upload>
          <Avatar>
            LR
          </Avatar>
        </Upload>
      </Form>
    </div>
  );
};

export default Account;
