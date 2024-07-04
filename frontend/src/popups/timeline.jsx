import React ,{useRef} from 'react'
import './timeline.css'
import Timelinegrid from './timelinegrid';

function Timeline(props) {

  //checking event list just for checking
  const backScreenthree=useRef();
  const closeBackscreenthree=(e)=>{
      if(backScreenthree.current===e.target)
      {
       props.setTrigger(false);
      }
  }
  const myEvents = [];
 
  for(let i=0;i<props.timeline.length;i++)
    {
      let time={
        id:(i+1),
        content:props.timeline[i].date.slice(0,10),
        cid:props.timeline[i].cid
      }
      myEvents.push(time);
    }

  return props.trigger === true ? (
    <div className='blur-screen-three' ref={backScreenthree} onClick={closeBackscreenthree}><div id='timeline'>
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
    </div></div>
  ) : "";
}

export default Timeline