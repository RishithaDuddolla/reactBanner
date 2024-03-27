import './index.css'

const Logout = props => {
  const {onLogout} = props

  const onClickLogoutButton = () => {
    onLogout()
  }

  return (
    <div>
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
