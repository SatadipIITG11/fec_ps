import React from 'react';
import './event.css';

const Event = ({ data, position }) => {
    const alignment = position % 2 === 0 ? 'left' : 'right';
    return (
      <li className={`event ${alignment}`}>
        <div className="event-content">
          {data.content}
        </div>
      </li>
    );
  };

export default Event;