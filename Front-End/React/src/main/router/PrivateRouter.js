import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


export default function PrivateRoute ({component: Component, authed}) {
  return (
      <Route
        render={(props) => authed === true
          ? <component/>
          : <Redirect to={{pathname: '/Login', state: {from: props.location}}} />}
      /> 
  )
}