import "./rightbar.css"
import { Users } from "../../dummyData"
import Friends from "../friendsOnline/FriendsOnline"
export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return (
      <>
         <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayimg" />
            <span className="birthdayText">
              Wish <b>Divyam</b> and <b>2 others</b> a very Happy Birthday
            </span>
          </div>
          <img src="/assets/ad.jpeg" alt="" className="rightbarAd"  />
          <h4 className="rightbarHeading">Online Social Beings</h4>
          <ul className="friendList">
            {Users.map(u=>(
              <Friends user ={u} key={u.id}/>
            ))}
          </ul>
      </>
    );
  };
  const ProfileRightbar = ()=>{
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="InfoItemLabel">City : </span>
          <span className="InfoItemValue">Lucknow</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="InfoItemLabel">Relationship : </span>
          <span className="InfoItemValue">Single</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="InfoItemLabel">Birthday : </span>
          <span className="InfoItemValue">11th November, 2001</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Following</h4>
      <div className="userFollowingList">
        <div className="userFollowing">
          <img src="/assets/person/1.jpeg" alt="" className="userFollowingImg" />
          <span className="userFollowingUsername">Alice</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/person/2.jpeg" alt="" className="userFollowingImg" />
          <span className="userFollowingUsername">Uncle John</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/person/3.jpeg" alt="" className="userFollowingImg" />
          <span className="userFollowingUsername">Azeria</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/person/4.jpeg" alt="" className="userFollowingImg" />
          <span className="userFollowingUsername">Amanda</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/person/5.jpeg" alt="" className="userFollowingImg" />
          <span className="userFollowingUsername">Alexender</span>
        </div>
        <div className="userFollowing">
          <img src="/assets/person/6.jpeg" alt="" className="userFollowingImg" />
          <span className="userFollowingUsername">Dan</span>
        </div>
      </div>
      </>
    );
  };
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
       {profile? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
        </div>
  )
}
