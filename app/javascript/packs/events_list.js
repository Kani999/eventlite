import React from 'react'

import Event from './event'

const EventsList = props => (
  <div>
    {props.events.map(function(event){
      return(
      <Event event={event} key={event.id}/>
      )
    })}
    </div>
)

export default EventsList