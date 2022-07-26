import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import Route from './route'
import './App.css'
const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const App = () => {
  const element = useRoutes(Route)
  const [collapsed, setCollapsed] = useState(false)
  const [itemOne, setItemOne] = useState('item1-1')
  const [itemTwo, setItemTwo] = useState('item1-2')
  const [itemThree, setItemThree] = useState('item2-1')
  const [itemFour, setItemFour] = useState('item2-2')
  const [flag, setFlag] = useState('3')
  const onFinish = (values) => {
    console.log(values)
    if (flag == 3) setItemOne(values.item)
    if (flag == 4) setItemTwo(values.item)
    if (flag == 6) setItemThree(values.item)
    if (flag == 8) setItemFour(values.item)
  }
  const handleClick = (e) => {
    setFlag(e.key)
  }
  const items = [
    getItem('菜单一', 'sub1', <UserOutlined />, [
      getItem(<NavLink to="/">{itemOne}</NavLink>, '3'),
      getItem(<NavLink to="/two">{itemTwo}</NavLink>, '4'),
    ]),
    getItem('菜单二', 'sub2', <TeamOutlined />, [
      getItem(<NavLink to="/three">{itemThree}</NavLink>, '6'),
      getItem(<NavLink to="/four">{itemFour}</NavLink>, '8'),
    ]),
  ]
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={(e) => handleClick(e)} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          ></Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h2>{element}</h2>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
              style={{ display: 'flex' }}
            >
              <Form.Item name="item">
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
