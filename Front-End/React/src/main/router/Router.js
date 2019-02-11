import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../../auth/Login';
import Home from '../home';
import PrivateRoute from './PrivateRouter';

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {authed : false};
  }

  Connection(){
     this.setState({
        authed: true
     });
     alert(this.state.authed);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route component={() => <Login  connectionHandler={this.Connection.bind(this)}/>} exact path="/Login" />
            <PrivateRoute authed={this.state.authed} exact path='/' component={Home}></PrivateRoute>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}
