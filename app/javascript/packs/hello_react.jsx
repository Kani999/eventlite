// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'World'
    }
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  
  render (){
    return (
    <div>
      <form>
        <input onChange={this.changeName} value={this.state.name} />
      </form>
      <div>Hello {this.state.name}!</div>
    </div>
    )
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello  />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
