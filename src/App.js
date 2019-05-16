import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Mainpage from './mainpage/mainpage'
import WrappedRegistrationForm from './login/login'

export default class App extends Component {
  render() {   
    return (
      <Switch>
        <Route exact path="/" component={ Mainpage } />
        <Route path="/login" component={ WrappedRegistrationForm } />
      </Switch>
    )
  }
}
