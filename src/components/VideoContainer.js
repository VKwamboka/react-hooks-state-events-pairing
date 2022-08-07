import React,{useState, useEffect} from 'react'
import video from '../data/video'

export default function VideoContainer() {
     
    const upVote= video.upvotes
    const [count, setCount] = useState(upVote)
    function handleInc(){
       
        return(
            
            setCount(count+1)
        // console.log("hi")
        )
        
    }
    
  return (
    <div>
    <iframe
        width="519"
        height="325"
        src= {video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <div>
        <h2>{video.title}</h2>
        <p>{video.views} views | created at {video.createdAt}</p>
        <button onClick={handleInc}>{count}</button>
        <button>{video.downvotes}</button>
       
        <div>
        <br/>
        <button>hide comments</button>
        </div>
        <hr/>
        
      </div>
    </div>
  )
}
