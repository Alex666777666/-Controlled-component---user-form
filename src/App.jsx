import React from 'react'
import UserForm from './UserForm.jsx'

class App extends React.Component {
  createUser = data => {
    console.log(data)
  }

  render() {
    return <UserForm onSubmit={this.createUser} />
  }
}

export default App
