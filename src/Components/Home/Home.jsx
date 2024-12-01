import React from 'react'
import Navbar from '../Header/Navbar'
import Header from '../Header/Header'
import Apartments from '../Apartments/Apartments'
import BuilderSlider from '../Builder Section/BuilderSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <Apartments/>
      <BuilderSlider/>
    </div>
  )
}

export default Home
