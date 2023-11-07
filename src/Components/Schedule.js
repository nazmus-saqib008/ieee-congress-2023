import React from 'react';
import "./Schedulecss.css"
import {BsPencil} from "react-icons/bs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faCutlery,faComment,faBullhorn,faLightbulb,faAward,faCommentDots } from '@fortawesome/free-solid-svg-icons';

function Schedule() {
  return (
    <div id='schedule'>
        <h1 className='text-5xl my-12 text-center text-slate-800'>Program Schedule</h1>
        <div class="timeline">

            <div class="tlentry right right1">
            <div className="date ml-0">10 to 10:30 am</div>
            <FontAwesomeIcon icon={faClock} size={5} className='icon'/>
            <div class="tlcontent">
                <h2 className="mb-2"><span className='font-semibold'>Dr. Triguna Sen Auditorium</span></h2>
                <h2 className='text-black'>Registration</h2>
    
            </div>
            </div>


            <div class="tlentry left left1">
            <div class="date">10:30-10.45am</div>
            <FontAwesomeIcon icon={faCutlery} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Tea and Snacks</h2>
                {/* <p>Opening remarks by IEEE Kolkata Section CS Chair - Prof. Sarbani Roy</p>
                <p>Remarks by branch counsellor - Prof. Sayan Chatterjee</p> */}
            </div>
            </div>

            <div class="tlentry right right1">
            <div class="date">10:45-11:30am</div>
            <FontAwesomeIcon icon={faComment} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Inaugaration of the program</h2>
                {/* <p>Prof. Iti Saha Misra</p> */}
            </div>
            </div>

            <div class="tlentry left left1">
            <div class="date">11:30am-1:00pm</div>
            <FontAwesomeIcon icon={faBullhorn} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Lecture session on benefits of IEEE</h2>
                {/* <p>Dr. Debajit Datta</p> */}
            </div>
            </div>
            <div class="tlentry right right1">
            <div class="date">1:00pm-2:00pm</div>
            <FontAwesomeIcon icon={faCutlery} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Lunch Break</h2>
                {/* <p>Prof. Kamal Sarkar</p> */}
            </div>
            </div>
            <div class="tlentry left left1">
            <div class="date">2:00pm-3:00pm</div>
            <FontAwesomeIcon icon={faBullhorn} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Technical Lecture Session</h2>
                <p>Technology in the Future and Its impact on Society</p>
            </div>
            </div>
            <div class="tlentry right right1">
            <div class="date">3:00-3:30pm</div>
            <FontAwesomeIcon icon={faLightbulb} size={5} className='icon'/>
            <div class="tlcontent">
                {/* <h2 className='font-bold'>IN TEQIP</h2> */}
                <h2>Technical Quiz Competition</h2>
            </div>
            </div>
            <div class="tlentry left left1">
            <div class="date">3:30pm-4:00pm</div>
            <FontAwesomeIcon icon={faComment} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Meeting/Interaction of SB with Office-bearers of IEEE Kolkata Section</h2>
                
            </div>
            </div>
            <div class="tlentry right right1">
            <div class="date">4:00-4:15pm</div>
            <FontAwesomeIcon icon={faCutlery} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Tea Break</h2>
                {/* <p>JUDGES- Prof. Sayan Chatterjee, Prof. Chandreyee Chowdhury, Prof. Nibaran Das, Atreyi Bhanja</p> */}
            </div>
            </div>
            <div class="tlentry left left1">
            <div class="date">4:15pm-4:30pm</div>
            <FontAwesomeIcon icon={faAward} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Award Ceremony</h2>
                {/* <p>Pallavi Luharuka</p> */}
            </div>
            </div>
            <div class="tlentry right right1">
            <div class="date">4:30pm-5:00pm</div>
            <FontAwesomeIcon icon={faCommentDots} size={5} className='icon'/>
            <div class="tlcontent">
                <h2>Valedictory Session</h2>
            </div>
            </div>

        </div>


    </div>
  )
}

export default Schedule
