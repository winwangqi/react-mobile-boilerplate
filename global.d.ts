/// <reference types="react-scripts" />

declare module '*.module.sass' {
  const classes: { [key: string]: string }
  export default classes
}

declare namespace Store {
  export interface Action<T> {
    type: string
    payload: T
  }
}
