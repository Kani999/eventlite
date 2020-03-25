import React from 'react'
import ReactDOM from 'react-dom'

import EventsList from './events_list'
import EventForm from './event_form'

class Eventlite extends React.Component {
  // load state from pros
  constructor(props) {
    super(props)

    this.state = {
      events: this.props.events
    }
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
        <EventForm handleNewEvents={this.addNewEvent} />
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
