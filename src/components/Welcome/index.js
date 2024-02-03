import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  onSubscribeBtnClicked = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  getBtnText = () => {
    const {subscribed} = this.state
    return subscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {subscribed} = this.state
    const btnText = this.getBtnText()

    return (
      <div className="container">
        <h1 className="greeting">Welcome</h1>
        <p className="description">Thank you Happy Learning!</p>
        <button
          className="button"
          type="btn"
          onClick={this.onSubscribeBtnClicked}
        >
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
