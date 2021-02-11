import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {UsersPage} from './pages/UsersPage'
import {UserPage} from './pages/UserPage'


export const useRoutes = () => {
    return (
      <Switch>
        <Route path="/" exact>
          <UsersPage />
        </Route>
        <Route path="/user/:id">
          <UserPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
}
