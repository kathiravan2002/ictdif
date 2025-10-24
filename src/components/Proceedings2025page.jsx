import React from 'react'
import Proceedings2025 from '../shared/components/Proceedings2025'
import HelmetComponent from './HelmetComponent'

export default function Proceedings2025page() {
    return (
        <div>
            <HelmetComponent title={'Conference Proceedings - International Conference on Technology and Data Innovations for the Future'} canonical={'https://ictdif.com/conference-proceedings'} />
            <Proceedings2025 />
        </div>
    )
}
