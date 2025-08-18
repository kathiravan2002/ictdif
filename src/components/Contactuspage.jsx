import React from 'react'
import Contactus from '../shared/components/Contactus'
import HelmetComponent from './HelmetComponent'

function Contactuspage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/contact-us'} />
      <Contactus />
    </div>
  )
}

export default Contactuspage