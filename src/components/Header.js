import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul>
          <li>
            <a href='#'>Buy</a>
          </li>
          <li>
            <a href='#'>Sell</a>
          </li>
          <li>
            <a href='#'>Rent</a>
          </li>
          <li>
            <a href='#'>Mortgage</a>
          </li>
          <li>
            <a href='#'>Agents</a>
          </li>
          <li>
            <a href='#'>Featured</a>
          </li>
          <li>
            <a href='#'>News/Advice</a>
          </li>
          <li>
            <a href='#'>Log In</a>
          </li>
          <li>
            <a className='action' href='#'>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
