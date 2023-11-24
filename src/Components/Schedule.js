import React from "react";
import "./Schedulecss.css";
import { BsPencil } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCutlery,
  faComment,
  faBullhorn,
  faLightbulb,
  faAward,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

function Schedule() {
  return (
    <div
      id="schedule"
      className="pt-20 bg-white backdrop-filter backdrop-blur-[10px] bg-opacity-30"
    >
      <h1 className="text-3xl md:text-5xl mb-12 text-center text-slate-800">
        Program Schedule
      </h1>
      <div class="timeline">
        <div class="tlentry right right1">
          <div className="date ml-0">9:30 - 10 am</div>
          <FontAwesomeIcon icon={faClock} size={5} className="icon" />
          <div class="tlcontent">
            <h2 className="mb-2">
              <span className="font-semibold">Dr. Triguna Sen Auditorium</span>
            </h2>
            <h2 className="text-black">Registration</h2>
          </div>
        </div>

        <div class="tlentry left left1">
          <div class="date">10:00 - 11:15am</div>
          <FontAwesomeIcon icon={faComment} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Inaugaration of the program</h2>
            {/* <p>Opening remarks by IEEE Kolkata Section CS Chair - Prof. Sarbani Roy</p>
                <p>Remarks by branch counsellor - Prof. Sayan Chatterjee</p> */}
          </div>
        </div>

        <div class="tlentry right right1 right2">
          <div class="date">11:15 AM - 11:30 AM</div>
          <FontAwesomeIcon icon={faCutlery} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Tea Break</h2>
            {/* <p>Prof. Iti Saha Misra</p> */}
          </div>
        </div>

        <div class="tlentry left left1">
          <div class="date">11:30am-12:30pm</div>
          <FontAwesomeIcon icon={faBullhorn} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Lecture session on benefits of IEEE</h2>
            {/* <p>Dr. Debajit Datta</p> */}
          </div>
        </div>

        <div class="tlentry right right1">
          <div class="date">12:30pm-1:30pm</div>
          <FontAwesomeIcon icon={faComment} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Debate</h2>
            {/* <p>Dr. Debajit Datta</p> */}
          </div>
        </div>

        <div class="tlentry left left1">
          <div class="date">1:30pm-2:15pm</div>
          <FontAwesomeIcon icon={faCutlery} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Lunch Break</h2>
            {/* <p>Prof. Kamal Sarkar</p> */}
          </div>
        </div>

        <div class="tlentry right right1">
          <div class="date">2:15pm-2:45pm</div>
          <FontAwesomeIcon icon={faBullhorn} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Career Planning and Professional Growth through IEEE</h2>
            {/* <p>Prof. Kamal Sarkar</p> */}
          </div>
        </div>

        <div class="tlentry left left1">
          <div class="date">2:45PM - 3:45PM</div>
          <FontAwesomeIcon icon={faComment} size={5} className="icon" />
          <div class="tlcontent">
            <h2>
              Empowering Innovation - Bridging Gap Between Theory and Practice
            </h2>
          </div>
        </div>
        <div class="tlentry right right1">
          <div class="date">3:45-4:00pm</div>
          <FontAwesomeIcon icon={faCutlery} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Tea Break</h2>
            {/* <p>JUDGES- Prof. Sayan Chatterjee, Prof. Chandreyee Chowdhury, Prof. Nibaran Das, Atreyi Bhanja</p> */}
          </div>
        </div>
        <div class="tlentry left left1">
          <div class="date">4pm-4:45pm</div>
          <FontAwesomeIcon icon={faAward} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Faces of the SB/SBCs of IEEE Kolkata Section</h2>
            {/* <p>Pallavi Luharuka</p> */}
          </div>
        </div>
        <div class="tlentry right right1">
          <div class="date">4:45pm-5:00pm</div>
          <FontAwesomeIcon icon={faCommentDots} size={5} className="icon" />
          <div class="tlcontent">
            <h2>Valedictory Session</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
