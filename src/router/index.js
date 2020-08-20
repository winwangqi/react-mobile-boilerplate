import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './history'

export const paths = {
  index: '/',
}


const routes = [
  {
    path: paths.index,
    exact: true,
    component: lazy(() => import('@/views/index'))
  },
  {
    component: () => <Redirect to="/" />
  }
]

export default function () {
  return (
    <Router history={history}>
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
      </Suspense>
    </Router>
  )
}
