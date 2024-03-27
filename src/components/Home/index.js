import {Component} from 'react'
import './index.css'
import {Message} from 'src/components/Message/index.js'
import {Login} from 'src/components/Login/index.js'
import {Logout} from 'src/components/Logout/index.js'
class Home extends Component {
  constructor(props) {
    super(props)
    state = {islogin: flase}
  }
  onclickButton = () => {
    this.setState(prevstate => ({islogin: !prevstate.islogin}))
  }
  render() {
    const {islogin} = this.state
    return (
      <div className="bg">
        <div class="card">
          {<Message islogin={islogin} />}
          {islogin ? <Logout islogin={islogin} /> : <Login islogin={islogin} />}
        </div>
      </div>
    )
  }
}

export default Home
