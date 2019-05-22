import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../../Header/Header'
import ColectionPage from '../../Form/NewTicket'

export default class ViewTicket extends Component {
  render() {
    const { Content, Footer } = Layout;

    return (
      <Layout className="layout">
        <Header />

        <Content style={{ padding: '50px' }}>
            <ColectionPage />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Designed by Tuan Le @2019
        </Footer>
      </Layout>
    )
  }
}
