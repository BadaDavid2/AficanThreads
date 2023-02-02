import React from 'react'
import Cloths from "./Clothes/Clothes";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Navbar from "./Navigation/Navbar";
import Process from "./Process/Process";
import Story from "./Story/Story";
const MyApp = () => {
  return (
    <>
        <Navbar/>
      <Header/>
      <Cloths/>
      <Story/>
      <Process/>
      <Contact/> 
    </>
  )
}

export default MyApp
