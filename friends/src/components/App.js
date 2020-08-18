import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Login'
import Friends from './Friends'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <ProtectedRoute component={Friends} path="/friends" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
