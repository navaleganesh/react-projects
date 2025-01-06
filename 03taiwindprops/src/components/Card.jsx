import React from 'react'

function Card({username,btnText="visit me",url}){
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src={url}
          alt={username}
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='mt-3 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>
            {btnText}
        </button>
      </div>
    )
}

export default Card