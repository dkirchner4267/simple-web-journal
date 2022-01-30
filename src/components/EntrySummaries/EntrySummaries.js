import React from 'react';
import './EntrySummaries.css';
import EntrySummary from '../EntrySummary/EntrySummary';


const EntrySummaries = ({data}) => {
    data.sort();
    return (
        <div className='entry-summaries-main-div'>
            {
                data.map(entry => {
                    return <EntrySummary key={entry.id} title={entry.title} date={entry.date} content={entry.content} />
                })
            }
        </div>
    )
}

export default EntrySummaries;