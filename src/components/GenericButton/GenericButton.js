import React from 'react';
import './GenericButton.css';

const GenericButton = ({ title, onClickFunction }) => {
    return (
        <div className='generic-button-div'>
            <button type='button' className='generic-button' onClick={onClickFunction}>{title}</button>
        </div>
    )
}

export default GenericButton;