import React, { Component } from 'react'
import './Header.css'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: 'Tuan Le'
    }
  }

  handleLogout = (e) => {
    this.setState({
      userInfo: null
    })
  }

  isLoggedIn = () => {
    return (
      <Menu className="layout-menu"
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home" style={{ fontSize: '20px' }}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="view-ticket" style={{ fontSize: '20px' }}>
          <Link to="/viewticket">View ticket</Link>
        </Menu.Item>
        <SubMenu 
          title={ 
            <span>
              <Icon type="user" style={{ fontSize: '20px' }}/>
              { this.state.userInfo }
            </span>
          }
          style={{
            fontSize: '20px',
            float: 'right'
          }}
        >
          <Menu.Item key="logout" onClick={ this.handleLogout }>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }

  isNotLoggedIn = () => {
    return (
      <Menu className="layout-menu"
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home" style={{ fontSize: '20px' }}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="login" style={{ fontSize: '20px', float: 'right' }}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    const { Header } = Layout;

    return (
      <Header>
        { this.state.userInfo ? this.isLoggedIn() : this.isNotLoggedIn() }
      </Header>       
    )
  }
}
