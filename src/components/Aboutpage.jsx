import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/about'}/>
      <About/>
      </div>
  )
}

export default Aboutpage