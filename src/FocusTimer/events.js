import { controls, backgrounds } from "./elements.js"
import * as actions from './actions.js'

export function registerControls() {

  controls.addEventListener('click', (ev) => {
    const action = ev.target.dataset.action
    
    if(typeof actions[action] != 'function' ) {
      return
    }

    actions[action]()
  })
}

export function changeBackground() {

  backgrounds.addEventListener('click', (ev) => {
    const actionBackground = ev.target.dataset.background

    if(typeof actions[actionBackground] != 'function') {
      return
    }

    actions[actionBackground]()
    
  })
}