import React, { useState } from 'react'
import { EmojiIcon, GifIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icon/icon'
import { db } from "../firebase-config"
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { pp } from "../images/images"
const TweetBox = ({ reflesh }) => {
    const [content, setContent] = useState("")
    const userDoc = collection(db, "tweets")
    const sendTweet = async () => {
        if (content !== "") {
            await addDoc(userDoc, {
                displayName: "Hakan Dursun",
                username: " @hakandrsn7",
                content,
                timestamp: new Date().getDay() + " " + new Date().getMonth() + " " + new Date().getFullYear(),
                avatar: pp,
                image: ""
            });
            setContent("")
        }

    }
    return (
        <div className='flex-1 flex flex-col mt-2 px-2'>
            <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none'
                placeholder="What s happening"
                onChange={e => setContent(e.target.value)}
                value={content} />
            <div className='flex items-center justify-center'>
                <div className='flex -ml-3'>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-extraLight'>
                        <ImageIcon className="w-6 h-6" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-extraLight'>
                        <GifIcon className="w-6 h-6" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-extraLight'>
                        <PollIcon className="w-6 h-6" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-extraLight'>
                        <EmojiIcon className="w-6 h-6" />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-extraLight'>
                        <ScheduleIcon className="w-6 h-6" />
                    </div>

                </div>
                <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'
                    onClick={() => sendTweet()}
                > tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
