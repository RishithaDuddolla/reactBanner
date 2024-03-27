import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false,setIsLoggedIn: false}

  handleLogin = () => {
    this.setState(prev => ({isLoggedIn: !prev.isLoggedIn}))
  }

  handleLogout = () => {
    this.setState(prev => ({isLoggedIn: !prev.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.handleLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
