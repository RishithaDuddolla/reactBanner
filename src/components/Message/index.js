import {Component} from 'react'
import {Home} from 'src/components/Home'
import './index.css'

class Message extends Home {
  constructor() {
    const {islogin} = props
  }

  messagerender = () => {
    let message
    if (this.islogin == true) {
      message = 'Logout'
    } else {
      message = 'Login'
    }
    return message
  }

  render() {
    const {message} = messagerender()
    return <h1 className="h1">{message}</h1>
  }
}

export default Message
