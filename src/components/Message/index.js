import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  return (
    <div className="message-container">
      {isLoggedIn ? (
        <p className="welcome-message">Please Login</p>
      ) : (
        <p className="welcome-message">Welcome User</p>
      )}
    </div>
  )
}

export default Message
