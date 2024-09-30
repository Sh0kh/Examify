import React from 'react'
import Listening from './Listening/Listening'
import WarningModal from './Modal/WarningModal'
import Reading from './Reading/Reading'
import { useSelector } from 'react-redux'
import Speaking from './Speaking/Speaking'

function Book1() {
  const currentComponent = useSelector((state)=>state.component.currentComponent)
  return (
    <div className='Book_1'>
         {currentComponent === 'Listening' && <Listening />}
         {currentComponent === 'Reading' && <Reading />}
         {currentComponent === 'Speaking' && <Speaking/>}
      <WarningModal/>
    </div>
  )
}

export default Book1