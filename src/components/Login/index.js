import {Logout} from '/src/components/Logout'
import {Component} from 'react'

class Login extends Component {
  onclickButton = () => {
    this.setState(prevstate => ({islogin: !prevstate.islogin}))
  }

  render() {
    return (
      <button classname="btn" type="button" onClick={onclickButton()}>
        Login
      </button>
    )
  }
}

export default Login
