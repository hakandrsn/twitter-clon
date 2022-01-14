import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { PopulerIcon } from '../icon/icon'
import TweetBox from '../components/TweetBox'
import { pp } from "../images/images"
import Divider from '../components/Divider'
import FeedList from '../components/FeedList'
const Content = () => {
    const [user, setuser] = useState([])
    const [tweet, setTweet] = useState([])
    const usersCollentionsRef = collection(db, "names")
    const tweetCollentionsRef = collection(db, "tweets")
    //getirme
    useEffect(() => {
        const getir = async () => {
            const data = await getDocs(tweetCollentionsRef)
            setTweet(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            // data.docs.map(doc=>setTweet({...doc.data(),id:doc.id}))
            // console.log(tweet)
        }
        getir()
    }, [tweet])

    // ekleme
    const createUser = async () => {
        await addDoc(usersCollentionsRef, { name: "feyza", surname: "kaya" })
    }
    const deleteUser = async (id) => {
        const userDoc = doc(db, "names", id)
        await deleteDoc(userDoc)
    }
    const updateUser = async (id, name) => {
        const userDoc = doc(db, "names", id)
        const newFields = { name: "hop" }
        await updateDoc(userDoc, newFields)
    }

    return (
        <div className='flex-1 bg-white flex-col border-r border-l border-gray-extraLight'>
            <header className='sticky top-0 z-10  flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
                <span className='text-xl font-bold text-gray-900'>home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className='flex space-x-2 px-4 py-3'>
                <img src={pp}
                    className='w-11 h-11 rounded-full' alt='Profile' />
                <TweetBox />
            </div>
            <Divider />
            <FeedList tweet={tweet} />
        </div>
    )
}
export default Content
