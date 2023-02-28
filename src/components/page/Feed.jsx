import React from 'react'
import Tweet from '../tweet/Tweet'
import { tweets } from './tweets-data'

export default function Feed() {
  return (
    <div className='feed'>
        <h1 className='text-l text-bold'>Home</h1>
        <div className='feed-tweets'>
            {tweets.map(tweetContent => {
                return <Tweet key={tweetContent.at_name} tweetContent={tweetContent}></Tweet>
            })}
        </div>
    </div>
  )
}
