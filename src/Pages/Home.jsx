import React from 'react'
import Hero from '../Components/HomePage/Hero'
import Service from '../Components/HomePage/Service'
import Result from '../Components/HomePage/Result'
import FAQ from '../Components/HomePage/FAQ'
import ChatTeam from '../Components/HomePage/ChatTeam'
import ItliveInfo from '../Components/HomePage/ItliveInfo'

function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <ItliveInfo />
      <Result />
      <FAQ />
      <ChatTeam />
    </main>
  )
}

export default Home