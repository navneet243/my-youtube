import React, {useState} from 'react'
import Comments from './Comments'
import { commentsData } from '../constants'

const CommentList = ({comments}) => {
  return (
    comments.map((comment, index)=>(
      <div key={index}>
        <Comments data={comment} />
        <div style={{ borderLeft: "1px solid gray" }} className="px-5 mx-1">
          <CommentList comments={comment.replies}/>
        </div>
      </div>
    ))
  )  
}

const CommentsContainer = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
        <h1 className='text-2xl font-bold'>Comments: </h1>
      <div className='ml-5 py-1'>
        <div className="mt-4 flex gap-5">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
            alt="user image"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className='flex flex-col'>
            <input
              placeholder="Add a comment..."
              type="text"
              className="border-b-2 h-10 w-[912px] border-gray-100 outline-none text-sm"
              onFocus={() => setShowButton(true)}
              onBlur={() => setShowButton(false)}
            />
            {showButton && (
              <button className="h-9 w-24 mt-1 bg-gray-300 text-black relative left-[824px]  rounded-full">
                Comment
              </button>
            )}
          </div>
        </div>
        <CommentList comments={commentsData}/>
      </div>
    </div>
  )
}

export default CommentsContainer