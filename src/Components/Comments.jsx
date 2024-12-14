import React from 'react'
import { BiLike, BiDislike } from 'react-icons/bi';

const Comments = ({data}) => {
  const { name, text, replies} = data;
  return (
    <div className="mt-5 mb-5">
      <div className="flex items-center gap-3 hover:bg-gray-200 rounded-l-2xl">
        <img
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
          alt="avatar image"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
        />
        <div className="">
          <p className="text-xs font-semibold cursor-pointer">@{name}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>

      <div className="mx-12 mt-0.5 my-1 flex gap-3">
        <button >
          <BiLike size={15} />
        </button>
        <button>
          <BiDislike size={15} />
        </button>
        <button className="rounded-full px-3 py-1 text-sm text-black hover:bg-slate-400">
          Replies
        </button>
        {/* <p>{replies}</p> */}
      </div>
    </div>
  );
}

export default Comments