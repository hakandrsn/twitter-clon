import React from 'react'
import { LikeIcon, ReplyIcon, RetWeetIcon, ShareIcon } from '../icon/icon'

const FeedItem = ({ avatar, content, displayName, timestamp, username, image }) => {
    const time = timestamp
    console.log(time)
    return (
        <article className='flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer'>
            <img src={avatar} alt='profil' className='w-11 h-11 rounded-full' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'> {displayName} </h4>
                    <span className='text-gray-dark'> {username} </span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full' />
                    <span>
                        {timestamp}
                    </span>
                </div>
                <p className='mt-2 text-gray-900 text-sm'>{content}</p>
                {image && (<img src={image} className='my-2 rounded-xl max-h-96' />)}
                <ul className='flex justify-between max-w-md -ml-1 mt-3'>
                    <li className='flex group items-center space-x-3 text-gray-dark text-sm'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                            <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                        </div>
                        <span className='group-hover:text-primary-base'>15</span>
                    </li>
                    <li className='flex group items-center space-x-3 text-gray-dark text-sm'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                            <RetWeetIcon className="w-5 h-5 group-hover:text-green-200" />
                        </div>
                        <span className='group-hover:text-green-200'>15</span>
                    </li>
                    <li className='flex group items-center space-x-3 text-gray-dark text-sm'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                            <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
                        </div>
                        <span className='group-hover:text-pink-400'>15</span>
                    </li>
                    <li className='flex group items-center space-x-3 text-gray-dark text-sm'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                            <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                        </div>
                    </li>
                </ul>
            </div>

        </article>
    )
}

export default FeedItem
