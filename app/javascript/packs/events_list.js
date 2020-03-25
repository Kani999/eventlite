import React from 'react'

import Event from './event'

const EventsList = props => (
  <div>
    {props.events.map(function(event, i){
      return(
      <Event event={event} key={i}/>
      )
    })}
    </div>
)

export default EventsList