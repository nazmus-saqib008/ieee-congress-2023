import React from "react";
import ieee_logo from "../Assets/ieee_logo.png";
import bg_img from "../Assets/image1.png";

function Speaker() {
  return (
    <div
      id="speakers"
      className="flex h-fit flex-col justify-center items-center bg-white py-8"
    >
      <h1 className="text-[2rem] font-roboto font-semibold md:text-5xl mb-12 text-center">Speakers</h1>
      <div className="relative flex flex-wrap justify-center items-center gap-[3rem] px-2 py-2">
        <div className="card relative border w-96 h-[450px] p-2 rounded-md">
          <div className="imgbox relative w-full h-4/5">
            <img
              src="data:image/jpeg;base64,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"
              className="realtive w-full h-full"
              alt=""
            />
          </div>
          <div className="content">
            <p className="relative text-2xl text-center mt-4">
              Prof. Sivaji Chakravorti
            </p>
          </div>
        </div>

        <div className="card  relative border w-96 h-[450px] p-2 rounded-md">
          <div className="imgbox relative w-full h-4/5">
            <img
              src="https://www.dguha.info/img/D-GUHA-IMAGE/D-GUHA-IMAGE-1.jpg"
              className="realtive w-full h-full"
              alt=""
            />
          </div>
          <div className="content">
            <p className="relative text-2xl text-center mt-4">
              Prof. Debatosh Guha
            </p>
          </div>
        </div>

        <div className="card relative border w-96 h-[450px] p-2 rounded-md">
          <div className="imgbox relative w-full h-4/5">
            <img
              src="https://media.licdn.com/dms/image/C5103AQF90C3AyLoWiw/profile-displayphoto-shrink_800_800/0/1570845416918?e=1706140800&v=beta&t=eeJFxcMeyHll630mf7hp7R1ytsYp0AoIg_Px-TiCoNE"
              className="realtive w-full h-full"
              alt=""
            />
          </div>
          <div className="content">
            <p className="relative text-2xl text-center mt-4">
              Mr. Sumit Goswami
            </p>
          </div>
        </div>

        <div className="card  relative border w-96 h-[450px] p-2 rounded-md">
          <div className="imgbox relative w-full h-4/5">
            <img
              src="https://www.iitg.ac.in/storage/faculty/7431faculty.JPG"
              className="realtive w-full h-full"
              alt=""
            />
          </div>
          <div className="content">
            <p className="relative text-2xl text-center mt-4">
              Prof. John Jose
            </p>
          </div>
        </div>

        <div className="card  relative border w-96 h-[450px] p-2 rounded-md">
          <div className="imgbox relative w-full h-4/5">
            <img
              src="https://media.licdn.com/dms/image/C5603AQElRqt4WKPjmg/profile-displayphoto-shrink_800_800/0/1639479844233?e=1706140800&v=beta&t=W_Adl9-BHu1ee1r8NAKgnsv9czdDQMbawoSgPLyf9_c"
              className="realtive w-full h-full"
              alt=""
            />
          </div>
          <div className="content">
            <p className="relative text-2xl text-center mt-4">
              Ms. Sudeshna Choudhury
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
