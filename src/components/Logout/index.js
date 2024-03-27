import {Login} from '/src/components/Login'
import {Component} from 'react'

class Logout extends Component{
onclickButton = () => {
  this.setState(prevstate => ({islogin: !prevstate.islogin}))
}
render(){
  return (
    <button classname="btn" type="button" onClick={onclickButton()}>
      Logout
    </button>
  )
}
}

export default Logout
