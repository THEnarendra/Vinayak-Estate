import React from 'react'
import Header from '../Header/Header'
import Apartments from '../Apartments/Apartments'
import BuilderSlider from '../Builder Section/BuilderSection'

const Home = () => {
  return (
    <div className='homeSection'>
      <Header/>
      <div className='carousel'>
      <h2 style={{ textAlign: "center", fontSize: "2rem"}}>Spotlight Projects</h2>

      <BuilderSlider/>
      </div>
    </div>
  )
}

export default Home
