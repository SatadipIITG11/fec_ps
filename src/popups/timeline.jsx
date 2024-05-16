import React from 'react'
import './timeline.css'
import Timelinegrid from './timelinegrid';

function Timeline(props) {

  //checking event list just for checking

  const myEvents = [
    { id: 1, content: 'Jan24' },
    { id: 2, content: 'Event' },
    { id: 3, content: 'Event' },
    { id: 4, content: 'Event' },
    { id: 5, content: 'Event' },
    { id: 6, content: 'Event' },
    { id: 7, content: 'Event' },
    { id: 8, content: 'Event' },
    { id: 9, content: 'Event' },
    { id: 10, content: 'Event' },
    { id: 11, content: 'Event' },
    // Add more event data
  ];


  return props.trigger === true ? (
    <div id='timeline'>
      <div className='timelinediv'>
        <div className="close" >
          <div id="close" onClick={() => props.setTrigger(false)}>
            <i class="fa-solid fa-xmark fa-2x"></i>
          </div>
        </div>
        <div id="timeline">
          <div className="timeline-header">
            Timeline
          </div>
          <div className="timeline-grid">
            <Timelinegrid events={myEvents} />
          </div>
        </div>
      </div>
    </div>
  ) : "";
}

export default Timeline