import React from 'react';
import Event from './event';
import './timelinegrid.css';

const Timelinegrid = ({ events }) => {
  if (!events || events === 0 || events === null || events.length===0)
    {
      return <p>Your Timeline is Currently Unavailable!</p>
    }
  return (
    <div className="timeline-container">
      <ul className="timeline">
        {events.map((event, index) => (
          <React.Fragment key={event.id}>
            {index > 0 && <Curve position={index} />}
            <Event data={event} position={index} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

const Curve = ({ position }) => {
  const alignment = position % 2 === 0 ? 'curve-right' : 'curve-left';
  return (
    <svg className={`curve ${alignment}`} width="200" height="100" viewBox="0 0 200 100">
      <path d="M0,50 Q100,-30 200,50" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  );
};

export default Timelinegrid;
