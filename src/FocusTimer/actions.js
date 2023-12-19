import state from "./state.js"
import * as timer from './timer.js'
import * as sounds from './sounds.js'

function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()

  sounds.buttonPress.play()
}

function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPress.play()
}

function increase() {
  timer.add5Minutes()
}

function decrement() {
  timer.remove5Minutes()
}

function forest() {
  document.documentElement.classList.toggle('forest-on')
  document.documentElement.classList.remove('rain-on')
  document.documentElement.classList.remove('coffee-on')
  document.documentElement.classList.remove('fireplace-on')
}

function rain() {
  document.documentElement.classList.toggle('rain-on')
  document.documentElement.classList.remove('forest-on')
  document.documentElement.classList.remove('coffee-on')
  document.documentElement.classList.remove('fireplace-on')
}

function coffee() {
  document.documentElement.classList.toggle('coffee-on')
  document.documentElement.classList.remove('rain-on')
  document.documentElement.classList.remove('forest-on')
  document.documentElement.classList.remove('fireplace-on')
}

function fireplace() {
  document.documentElement.classList.toggle('fireplace-on')
  document.documentElement.classList.remove('rain-on')
  document.documentElement.classList.remove('coffee-on')
  document.documentElement.classList.remove('forest-on')
}

export { toggleRunning, stop, increase, decrement, forest, rain, coffee, fireplace }