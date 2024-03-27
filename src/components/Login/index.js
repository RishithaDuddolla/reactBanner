import './index.css'

const Login = props => {
  const {onLogin} = props

  const onClickLoginButton = () => {
    onLogin()
  }

  return (
    <div>
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
