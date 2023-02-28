import React from 'react'
import twitterIconUrl from '../../assets/icons/twitter.svg'
import userIconUrl from '../../assets/icons/user.svg'
import logoIconUrl from '../../assets/icons/logo.svg'

const types = {
  "home": {
    iconUrl: twitterIconUrl,
    text: "Home"
  },
  "user": {
    iconUrl: userIconUrl,
    text: "Profile"
  },
  "logo": {
    iconUrl: logoIconUrl,
    text: ""
  }
}

export default function NavItem({type}) {
  const nav = types[type]
  return (
    <div className='navItem text-l text-bold'><img src={nav.iconUrl}/>{nav.text}</div>
  )
}
