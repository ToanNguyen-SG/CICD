'use client'

import Providers from '@/utils/provider'
import Navbar from '@/container/navbar/Navbar'
import FooterComponent from '@/container/footer/Footer'
import './globals.css'
import LeftBar from '@/container/leftBar'
import { Breadcrumb, Layout, Menu, MenuProps, Space } from 'antd'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'

const { Header, Content, Sider, Footer } = Layout

const headerStyle: React.CSSProperties = {
  height: '10vh',
  margin: 0,
  padding: 0,
  paddingBottom: 40,
  backgroundColor: 'black',
}

const contentStyle: React.CSSProperties = {
  height: '80vh',

  backgroundColor: 'black',
}

const siderStyle: React.CSSProperties = {
  height: '80vh',
  backgroundColor: 'black',
}

const footerStyle: React.CSSProperties = {
  height: '10vh',
  backgroundColor: 'black',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body style={{ height: '100vh', width: '100vw' }}>
        <Providers>
          <Space
            direction='vertical'
            style={{
              width: '100%',
              height: '100%',
              margin: 0,
              padding: 0,
              backgroundColor: 'black',
            }}>
            <Layout>
              <Header style={headerStyle}>
                <Navbar />
              </Header>
              <Layout hasSider>
                <Sider style={siderStyle}>
                  <LeftBar />
                </Sider>
                <Content style={contentStyle}> {children}</Content>
              </Layout>
              <Footer style={footerStyle}>
                <FooterComponent />
              </Footer>
            </Layout>
          </Space>
        </Providers>
      </body>
    </html>
  )
}
