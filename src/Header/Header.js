import React, { Component } from 'react'
import './Header.css'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: 'username'
    }
  }

  handleLogout = (e) => {
    this.setState({
      userInfo: null
    })
  }

  render() {
    const { Header } = Layout;

    return (
      <Header>
        <Menu className="layout-menu"
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          { this.state.userInfo
            ? <Menu.Item key="3" onClick={ this.handleLogout }><Link to="/">Logout</Link></Menu.Item>
            : <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
          }
        </Menu>
      </Header>       
    )
  }
}
