import React from 'react'
import ReactDOM from 'react-dom'

const Eventlite = props => (
  <div>
    <h1>Eventlite</h1>
    {props.events.map(function(e){
      return(
        <p>{e.title}</p>
      )
    })}
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
