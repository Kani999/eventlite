import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


import EventsList from './events_list'
import EventForm from './event_form'

class Eventlite extends React.Component {
  // load state from pros
  constructor(props) {
    super(props)

    this.state = {
      //events displayed at the page
      events: this.props.events,
      // inputs for EventForm
      title: '',
      start_datetime: '',
      location: ''

    }
  }

  // set state and sent it as props to EventForm
  handleInput = (event) => {
    const name = event.target.name;
    const newState = {};
    newState[name] = event.target.value;
    this.setState(newState)
    event.preventDefault();
  }

    // sent data to CREATE events controlelr
  handleSubmit = e => {
    axios({
      method: 'POST',
      url: 'events',
      data: { event: this.state },
      headers: {
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token").content
      }
    })
    .then(function (response) {
      console.log(response)
      // pass data to a list of events
      this.addNewEvent(response.data)
    }.bind(this))
    .catch(function(error) {
      console.log(error)
    })

    e.preventDefault()
  }

  // set new event to a state
  addNewEvent = (event) => {
    const events = [event, ...this.state.events].sort(function (a, b) {
      return new Date(a.start_datetime) - new Date(b.start_datetime)
    })
    this.setState({events: events})
  }

  render() {
    return (
      <div>
        <h1>Eventlite</h1>
        {/* passes function addNewEvent as prop to event_form#HandleSubmit for use --> */}
        <EventForm 
          handleSubmit = {this.handleSubmit}
          handleInput={this.handleInput}
          title = {this.state.title}
          start_datetime={this.state.start_datetime}
          location={this.state.location} />
        <EventsList events={this.state.events}/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
