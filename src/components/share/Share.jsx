import "./share.css"
import {PermMedia,Room,EmojiEmotions,Label} from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTabTop">
            <img src="/assets/person/11.jpeg" alt="" className="shareTopImg" />
            <input placeholder="What's on your mind today" className="shareTopText" />
            </div>
            <hr className="shareHr" />
            <div className="shareTabBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shareIcon" sx={{color:"#ff0000"}}/>
                        <span className="shareOptionText">Media</span>
                    </div>
                    <div className="shareOption">
                        <Label className="shareIcon" sx={{color:"black"}}/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className="shareIcon" sx={{color:"#1877f2"}}/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions sx={{color:"#5eab0f"}}className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
