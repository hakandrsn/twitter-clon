import React from 'react'
import FeedItem from './FeedItem'
const FeedList = ({ tweet }) => {
    console.log(tweet)
    return (
        <div>
            {
                tweet.map((tweets, index) => {
                  return  <FeedItem {...tweets} key={index} />
                })
            }
        </div>
    )
}

export default FeedList
