'use client'

import React from 'react'
import { NotificationOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

const { Header, Content, Footer, Sider } = Layout

const items = (router: AppRouterInstance): MenuProps['items'] => [
  {
    key: `HOME`,
    icon: React.createElement(UserOutlined),
    label: `HOME`,
    children: [
      {
        key: 'Home',
        label: `Home`,
      },
    ],
  },
  {
    key: `QUOTE`,
    icon: React.createElement(NotificationOutlined),
    label: `QUOTE`,
    children: [
      {
        key: 'category',
        label: `Category`,
        onClick: () => router.push('/admin/quote/category'),
      },
      {
        key: 'request',
        label: `Request`,
        onClick: () => router.push('/admin/quote/request'),
      },
      {
        key: 'questions',
        label: `Questions`,
        onClick: () => router.push('/admin/quote/questions'),
      },
    ],
  },
  {
    key: `OUR`,
    icon: React.createElement(NotificationOutlined),
    label: `OUR`,
    children: [
      //   {
      //     key: 'service',
      //     label: `Service`,
      //     onClick: () => router.push('/admin/our/service'),
      //   },
      {
        key: 'service',
        label: `Service`,
        onClick: () => router.push('/admin/our/service'),
      },
      //   {
      //     key: 'website',
      //     label: `Website`,
      //     onClick: () => router.push('/admin/our/website'),
      //   },
      //   {
      //     key: 'mobile',
      //     label: `Mobile`,
      //     onClick: () => router.push('/admin/our/mobile'),
      //   },
    ],
  },
]

export default function AdminLayout({ children }: any) {
  const router = useRouter()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', height: '10vh' }}>
        <div className='demo-logo' />
      </Header>
      <Content style={{ height: '80vh' }}>
        <Layout style={{ width: '100%', height: '100%' }}>
          <Sider width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
              defaultOpenKeys={['HOME', 'QUOTE', 'OUR']}
              items={items(router)}
            />
          </Sider>
          <Content>{children}</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', height: '10vh' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  )
}
