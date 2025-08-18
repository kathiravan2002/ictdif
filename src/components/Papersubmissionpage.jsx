import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage