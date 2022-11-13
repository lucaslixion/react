import React from 'react'
import '../header.css'

const Header = () => {
  return (
    <div>
        <header>
            <div className='items'>
                <ul>
                    <li className='home'>
                        Home
                    </li>
                    <li className='Sign-up'>
                        Sign Up
                    </li>
                    <li className='login'>
                        Login
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header
