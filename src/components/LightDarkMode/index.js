// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  OnMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const modelClassName = isDarkMode ? 'Dark-Mode' : 'Light-Mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div className={`${modelClassName}`}>
          <h1 className="head">Click to Change Mode</h1>
          <button type="button" className="Button" onClick={this.OnMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
