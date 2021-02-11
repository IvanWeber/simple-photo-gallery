import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Users} from './pages/Users'
import {User} from './pages/User'


export const useRoutes = () => {
    return (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
}
