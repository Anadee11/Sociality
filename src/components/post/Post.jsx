import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const[isliked,setisLiked]= useState(false)
    const likeCounter = ()=>{
        setLike(isliked? like-1:like+1);
        setisLiked(!isliked);
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>(u.id ===post.userId))[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u=>(u.id ===post.userId))[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeCounter} />
                    <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeCounter}/>
                    <span className="postLikeCounter">{like} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComments">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
