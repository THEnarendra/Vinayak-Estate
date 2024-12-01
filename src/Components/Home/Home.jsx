import React from 'react'
import Header from '../Header/Header'
import Apartments from '../Apartments/Apartments'
import BuilderSlider from '../Builder Section/BuilderSection'

const Home = () => {
  return (
    <div className='homeSection'>
      <Header/>
      <Apartments/>
      <div className='carousel'>
      <BuilderSlider/>
      </div>
    </div>
  )
}

export default Home
