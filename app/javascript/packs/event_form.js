import React from 'react'
import axios from 'axios'

// constructor for inputs
class EventForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            start_datetime: '',
            location: ''
        }
    }

    // set state when inputs are modified
    handleInput = (event) => {
        const name = event.target.name;
        const newState = {};
        newState[name] = event.target.value;
        this.setState(newState)
        event.preventDefault();
    }

    // sent data to CREATE events controlelr
    handleSubmit = e => {
        const handleNewEvent = this.props.handleNewEvents

        axios({
            method: 'POST',
            url: 'events',
            data: { event: this.state },
            headers: {
                'X-CSRF-Token': document.querySelector("meta[name=csrf-token").content
            }
        })
        .then(function (response) {
            // when response returns data, sent it as props to Eventlite
            console.log(response)
            handleNewEvent(response.data)
        })
        .catch(function(error) {
            console.log(error)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h4>Create an Event:</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInput} />
                    <input type="text" name="start_datetime" placeholder="Date" value={this.state.start_datetime} onChange={this.handleInput} />
                    <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleInput} />
                    <button type="submit">Create Event</button>
                </form>
            </div>
        )
    }
}

export default EventForm