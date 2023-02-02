import React from 'react'

const Header = () => {
  return (
    <>
      <header id='home'>
        <div className="header-text">
            <h1>Welcome to AfricanThreads</h1>
            <p>AfricanThreads is a clothing line that celebrates the vibrant and diverse cultures of Africa through fashion. Our mission is to promote cultural awareness and appreciation while also providing high-quality and stylish clothing.
            </p>
        </div>
        <div className="header-img">
            <img src="/hero.png" alt="" />
        </div>
      </header>
    </>
  )
}

export default Header
