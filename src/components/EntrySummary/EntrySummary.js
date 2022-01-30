import React from 'react';
import './EntrySummary.css';
import Ellipses from '../../assets/ellipses.png';

const EntrySummary = ({title, date, content}) => {
    return (
        <div className='entry-summary-main-div'>
            <div className='entry-summary-inner-div'>
                <h2 className='entry-summary-title'>{title}</h2>
            </div>
            <div className='entry-more-icon'>
                <img src={Ellipses} className='ellipses-icon' alt='Ellipses' />
            </div>
        </div>
    )
}

export default EntrySummary;