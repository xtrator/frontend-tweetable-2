import React from 'react'
import Feed from '../../components/page/Feed'
import Navbar from '../../components/page/Navbar'

export default function Home() {
  return (
    <div className='home__wrapper'>
        <div className='home'>
            <Navbar></Navbar>
            <Feed></Feed>
        </div>
    </div>
  )
}
