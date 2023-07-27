'use client'

import { Layout, Space } from 'antd'
import React from 'react'
import Navbar from '../navbar/Navbar'

import LeftBar from '../leftBar'
const { Header, Content, Sider, Footer } = Layout

import FooterComponent from '@/container/footer/Footer'

const headerStyle: React.CSSProperties = {
  height: '10vh',
  margin: 0,
  padding: 0,
  paddingBottom: 40,
  backgroundColor: 'black',
}

const contentStyle: React.CSSProperties = {
  //   height: '100vh',
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

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
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
          {/* <Sider style={siderStyle}>
            <LeftBar />
          </Sider> */}
          <Content style={contentStyle}> {children}</Content>
        </Layout>
        {/* <Footer style={footerStyle}>
          <FooterComponent />
        </Footer> */}
      </Layout>
    </Space>
  )
}
