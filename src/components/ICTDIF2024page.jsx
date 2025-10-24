import React from 'react'
import Conference2024 from '../shared/components/Conference2024'
import HelmetComponent from './HelmetComponent'

export default function ICTDIF2024page() {
    return (
        <div>
            <HelmetComponent title={'ICTDIF-2024 - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/ictdif-2024'} />
            <Conference2024 />
        </div>
    )
}
