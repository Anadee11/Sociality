import "./friendsOnline.css";

export default function Friends({user}) {
  return (
    <li className="friendListItem">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt=""
        />
        <span className="online"></span>
      </div>
      <span className="onlineUsername">{user.username}</span>
    </li>
  );
}
