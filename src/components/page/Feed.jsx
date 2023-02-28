import React from 'react'
import Tweet from '../tweet/Tweet'
import TweetForm from '../tweet/TweetForm'
import { tweets } from './tweets-data'

export default function Feed() {
  const userHasLoggedIn = true;

  return (
    <div className='feed'>
        <h1 className='text-l text-bold home__title'>Home</h1>
        {userHasLoggedIn && <TweetForm/>}
        <div className='feed-tweets'>
            {tweets.map(tweetContent => {
                return <Tweet key={tweetContent.at_name} tweetContent={tweetContent}></Tweet>
            })}
        </div>
    </div>
  )
}
