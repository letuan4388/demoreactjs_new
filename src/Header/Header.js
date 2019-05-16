import React, { Component } from 'react'
import './Header.css'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const { Header } = Layout;

    return (
          <Header>
            <Menu className="layout-menu"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', }}
            >
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
            </Menu>
          </Header>         
    )
  }
}
