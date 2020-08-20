import React, {PureComponent} from 'react'
import {observer, inject} from "mobx-react"
import {COUNTER_STORE} from "@/store"

import styl from './index.module.scss'

@inject('store')
@observer
class Index extends PureComponent {
  render() {

    const counterStore = this.props.store[COUNTER_STORE]

    return (
      <div className={styl.page}>
        <div>{counterStore.counter}</div>
        <button onClick={() => counterStore.increment()}>+</button>
        <button onClick={() => counterStore.decrement()}>-</button>
      </div>
    )
  }
}

export default Index
