import * as events from './events.js'
import state from './state.js'
import * as timer from './timer.js'

function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()

  events.registerControls()
  events.changeBackground()
}

export { start }