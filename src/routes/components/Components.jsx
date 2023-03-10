import React from 'react'
import Feed from '../../components/page/Feed';
import Navbar from '../../components/page/Navbar';
import Tweet from '../../components/tweet/Tweet';
import TweetForm from '../../components/tweet/TweetForm';

export default function Components() {
  return (
    <>
      <Tweet></Tweet>
      <TweetForm></TweetForm>
      <Navbar/>
      <Feed/>
    </>
  )
}
