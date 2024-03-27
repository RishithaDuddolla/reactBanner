import './index.css'

const Logout = props => {
  const {onLogout} = props

  const onClickLogoutButton = () => {
    onLogout()
  }

  return (
    <div className="logout-container">
      <button
        className="logout-button"
        type="button"
        onClick={onClickLogoutButton}
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
