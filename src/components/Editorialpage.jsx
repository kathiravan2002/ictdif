import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage