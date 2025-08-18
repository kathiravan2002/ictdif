import React from 'react'
import Scope from '../shared/components/Scope'
import HelmetComponent from './HelmetComponent'

function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/scope'} />
      <Scope />
    </div>
  )
}

export default Scopepage