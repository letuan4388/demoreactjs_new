import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../Header/Header'

export default class Mainpage extends Component {
  render() {
    const { Content, Footer } = Layout;

    return (
      <Layout className="mainpage-layout">
        <Header/>

        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Designed by Tuan Le @2019
        </Footer>
      </Layout>
    )
  }
}
