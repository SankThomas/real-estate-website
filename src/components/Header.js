import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul>
          <li>
            <button>Buy</button>
          </li>
          <li>
            <button>Sell</button>
          </li>
          <li>
            <button>Rent</button>
          </li>
          <li>
            <button>Mortgage</button>
          </li>
          <li>
            <button>Agents</button>
          </li>
          <li>
            <button>Featured</button>
          </li>
          <li>
            <button>News/Advice</button>
          </li>
          <li>
            <button>Log In</button>
          </li>
          <li>
            <button className='action'>Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
