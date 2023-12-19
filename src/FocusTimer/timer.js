import { stop } from './actions.js'
import * as elements from './elements.js'
import { kitchenTimer } from './sounds.js'
import state from './state.js'

function countdown() {

  clearTimeout(state.countdownId)

  if(!state.isRunning) {
    return
  }

  let minutes = elements.minutes.textContent
  let seconds = elements.seconds.textContent

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    stop()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout( () => countdown(), 1000)
}

function updateDisplay(minutes, seconds) {
  
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutes.textContent = String(minutes).padStart(2, '0')
  elements.seconds.textContent = String(seconds).padStart(2, '0')
}

function add5Minutes() {
  if(elements.minutes.textContent >= 60) {
    elements.minutes.textContent = 60 - 5
  }
  let minutes = Number(elements.minutes.textContent)
  elements.minutes.textContent = String(minutes + 5).padStart(2, '0')
}

function remove5Minutes() {

  if(elements.minutes.textContent > 5) {
    let minutes = Number(elements.minutes.textContent)
    elements.minutes.textContent = String(minutes - 5).padStart(2, '0')
  } else {
    let minutes = Number(elements.minutes.textContent)
    elements.minutes.textContent = String(minutes - minutes).padStart(2, '0')
  }

}

export { countdown, updateDisplay, add5Minutes, remove5Minutes }