import React,{useState} from 'react'
import video from '../data/video'

export default function VideoContainer() {
     
    const upVote= video.upvotes
    const downVotes = video.downvotes
    const [counts, setCounts] = useState(downVotes)
    const [count, setCount] = useState(upVote)
    const [view, setView] = useState(true)
    function handleInc(){
       
        return(
            
            setCount(count+1)
        // console.log("hi")
        )
        
    }
    function handleDislikes(){
       
      return(
          setCounts(counts+1)
      )
      
  }

  const commentList = video.comments.map((com) =>(
    <div>

      <div key={com.id}>
        <h3>user: {com.user}</h3>
        <p>{com.comment}</p>
      </div>
    
    </div>
  ))
  
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
        <button onClick={handleDislikes}>{counts}</button>
       
        <div>
          <br/>
          
          <div>
            <button onClick={()=>setView(!view)}>Comments</button>

            <hr/>
            {
              view? 
              <div key={commentList.id}>{commentList}</div>:null
            }
          </div>  
      
          <button>hide comments</button>
        </div>
      
        
      </div>
    </div>
  )
}
