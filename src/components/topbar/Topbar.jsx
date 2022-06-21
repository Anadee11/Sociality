import "./topbar.css";
import {Search, Person, Chat, Notifications} from '@mui/icons-material'
export default function Topbar() {
  function topFunction(){
 document.body.scrollTop = 0; 
 document.documentElement.scrollTop = 0;
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <a href="/"><span className="Logo">Sociality</span></a>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <Search sx={{marginLeft:2,fontSize:20}}/>
        <input placeholder="Search for your friend, post or a video" className="searchbarInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={topFunction}>Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
          <a href="/profile"><img src="/assets/person/11.jpeg" alt="" className="topbarImage"/></a>
      </div>
    </div>
  )
}
