import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/'} />
      <Home />
    </div>
  )
}

export default Homepage