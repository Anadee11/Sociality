import "./profile.css";
import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/Feed/Feed.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="rightProfile">
          <div className="rightProfileUp">
            <div className="profileCover">
            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
            <img src="/assets/person/11.jpeg" alt="" className="profilePhoto" />
            </div>
            <div className="profileInfo">
              <h4 className="profileUsername">Anadee</h4>
              <h4 className="profileDescription">Hey! I am a Frontend Developer</h4>
            </div>
          </div>
          <div className="rightProfileBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
