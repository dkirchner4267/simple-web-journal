import React, {useState} from 'react';
import './EntrySummary.css';
import Ellipses from '../../assets/ellipses.png';

const EntrySummary = ({title, date, content}) => {

    const [open, setOpen] = useState(false);

    const toggleEntry = (e) => {
        setOpen(!open);
    }

    return (
        <div className='full-entry-wrapper'>
            <div className={open ? 'entry-summary-main-div-expanded' : 'entry-summary-main-div'} >
                <div className='entry-summary-inner-div' onClick={e => toggleEntry(e)}>
                    <h2 className='entry-summary-title'>{title}</h2>
                </div>
                <div className='entry-more-icon'>
                    <img src={Ellipses} className='ellipses-icon' alt='Ellipses' />
                </div>
            </div>
            { open ? 
            <div className='entry-detail-main-div'>
                <hr className='line-break'/>
                <div className='entry-text'>
                    {content}
                </div>
            </div> : null
            }
        </div>
    )
}

export default EntrySummary;