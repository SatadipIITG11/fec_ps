import React from 'react';
import './event.css';

const Event = ({ data, position }) => {
  const alignment = position % 2 === 0 ? 'left' : 'right';

 
  return (
    <a href={`https://gateway.pinata.cloud/ipfs/${data.cid}`} className='link-click'><li className={`event ${alignment}`}>
      <div className="event-content">
      <i className="fa-solid fa-calendar-days calender"></i>
        {data.content}
      </div>
    </li></a>
  );
};

export default Event;