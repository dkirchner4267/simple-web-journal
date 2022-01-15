import React from 'react';
import './main-page.css';
import Header from '../../components/header/Header';
import SearchIcon from '../../assets/Search-Icon.png';

const MainPage = () => {
    return (
        <div className='main-page-div'>
            <Header />
            <div className='main-section-div'>
                <div className='searchbar-buttons-div'>
                    <button type='button' className='generic-button'>New Entry</button>
                    <div className='searchbar-div'>
                        <input type='text' placeholder='Search for an entry...' className='search-input' />
                        <img src={SearchIcon} className='search-icon' alt='Search Icon'/>
                    </div>
                    <button type='button' className='generic-button'>Filter</button>
                </div>
                <div className='entries-div'>
                    <p className='no-entries-text'>No entries yet! Start a <span className='new-entry-text'>New Entry</span> to begin.</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;