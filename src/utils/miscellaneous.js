// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const countDown = (count, callback, step = 1, interval = 1000) => {
  let timer = null

  const clearInterval = () => {
    timer && window.clearInterval(timer)
  }

  const intervalHandler = () => {
    if (count <= 0) clearInterval()
    if (callback) callback(count)
    count -= step
  }

  intervalHandler()

  timer = window.setInterval(intervalHandler, interval)

  return {
    unsubscribe: clearInterval,
  }
}
