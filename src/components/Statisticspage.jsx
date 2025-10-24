import React from 'react'
import Statistics from '../shared/components/Statistics'
import HelmetComponent from './HelmetComponent'

export default function Statisticspage() {
    return (
        <div>
            <HelmetComponent title={'Conference Statistics - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/conference-statistics'} />
            <Statistics />
        </div>
    )
}
