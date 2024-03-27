import {useState} from 'react'
import './index.css'

const Login = props => {
  const {onLogin} = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onClickLoginButton = () => {
    setIsLoggedIn(true)
    onLogin()
  }

  return (
    <div className="login-container">
      <button
        className="login-button"
        type="button"
        onClick={onClickLoginButton}
      >
        Login
      </button>
    </div>
  )
}

export default Login
