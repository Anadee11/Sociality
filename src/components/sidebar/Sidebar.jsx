import "./sidebar.css";
import {RssFeed,Chat,Group,VideoLibrary,Work,Event,Bookmark,QuestionAnswer,MenuBook} from '@mui/icons-material';
import CloseFriend from "../closeFriends/CloseFriend";
import { Users } from "../../dummyData";
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <RssFeed className="sidebarListIcon"/>
                <span className="sidebarItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <Chat className="sidebarListIcon"/>
                <span className="sidebarItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                <Group className="sidebarListIcon"/>
                <span className="sidebarItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                <VideoLibrary className="sidebarListIcon"/>
                <span className="sidebarItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                <Work className="sidebarListIcon"/>
                <span className="sidebarItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                <Event className="sidebarListIcon"/>
                <span className="sidebarItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                <MenuBook className="sidebarListIcon"/>
                <span className="sidebarItemText">Courses</span>
                </li>
                <li className="sidebarListItem">
                <Bookmark className="sidebarListIcon"/>
                <span className="sidebarItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                <QuestionAnswer className="sidebarListIcon"/>
                <span className="sidebarItemText">Questions</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                   <CloseFriend key= {u.id} user={u}/>
                ))}
            </ul>
        </div>
        </div>
  )
}
