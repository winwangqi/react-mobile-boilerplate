import { ReactElement, Suspense, lazy } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { RouteItem } from './typings'
import history from './history'
import paths from './paths'

const routes: RouteItem[] = [
  {
    paths: [paths.index],
    component: lazy(() => import('pages/home')),
  },
]

export default function RootRouter(): ReactElement {
  return (
    <Router history={history}>
      <Suspense fallback={null}>
        <Switch>
          {routes.map(({ paths, ...rest }) =>
            paths.map((path) => (
              <Route key={path} exact path={path} {...rest} />
            )),
          )}
        </Switch>
      </Suspense>
    </Router>
  )
}
