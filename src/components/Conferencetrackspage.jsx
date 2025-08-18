import React from 'react'
import Conferencetracks from '../shared/components/Conferencetracks'
import HelmetComponent from './HelmetComponent'

function Conferencetrackspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/conference-tracks'} />
      <Conferencetracks />
    </div>
  )
}

export default Conferencetrackspage