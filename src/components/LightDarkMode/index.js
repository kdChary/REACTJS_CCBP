import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isSwitchOn: false}

  toggleThemeSwitch = () => {
    this.setState(prevState => ({isSwitchOn: !prevState.isSwitchOn}))
    // console.log(this.prevState)
  }

  changeTheme = () => {
    const {isSwitchOn} = this.state
    let details = {
      container: 'dark-mode',
      buttonText: 'Light Mode',
      heading: 'dark-head',
    }
    if (isSwitchOn) {
      details = {
        container: 'light-mode',
        buttonText: 'Dark Mode',
        heading: 'light-head',
      }
    }
    return details
  }

  render() {
    const {container, buttonText, heading} = this.changeTheme()

    return (
      <div className={`container ${container}`}>
        <h1 className={heading}>Click to change mode</h1>
        <button
          className="button"
          type="submit"
          onClick={this.toggleThemeSwitch}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
