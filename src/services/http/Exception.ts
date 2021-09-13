import { ResponseBase } from './client'

class Exception {
  error: ResponseBase | Error | null = null
}

export class ResponseException<T> extends Exception {
  constructor(error: ResponseBase<T>) {
    super()
    this.error = error
  }
}

export class NetworkException extends Exception {
  constructor(error: Error) {
    super()
    this.error = error
  }
}
