import React from 'react'
import Hero from '../Components/HomePage/Hero'
import Service from '../Components/HomePage/Service'
import Result from '../Components/HomePage/Result'
import FAQ from '../Components/HomePage/FAQ'

function Home() {
  return (
      <main>
        <Hero/>
        <Service/>
        <Result/>
        <FAQ/>
      </main>
  )
}

export default Home