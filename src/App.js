import React from 'react'
import {Provider} from "mobx-react";

import Router from './router'
import store from './store'
import './styles/index.scss'

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App
