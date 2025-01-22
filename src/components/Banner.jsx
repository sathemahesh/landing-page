import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Banner = () => {
  return (
    <div style={{
       
        background: "linear-gradient(to right, #3A3089, #C83F74)"
    }}>
        <Header/>
        <Hero/>
    </div>
  )
}

export default Banner