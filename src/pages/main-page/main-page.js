import React from 'react';
import './main-page.css';
import Header from '../../components/header/Header';
import SearchIcon from '../../assets/Search-Icon.png';
import GenericButton from '../../components/GenericButton/GenericButton';

const MainPage = () => {
    return (
        <div className='main-page-div'>
            <Header />
            <div className='main-section-div'>
                <div className='searchbar-buttons-div'>
                    <GenericButton title="New Entry" onClickFunction={() => console.log("new entry clicked")} />
                    <div className='searchbar-div'>
                        <input type='text' placeholder='Search for an entry...' className='search-input' />
                        <img src={SearchIcon} className='search-icon' alt='Search Icon'/>
                    </div>
                    <GenericButton title="Filter" onClickFunction={() => console.log("filter clicked")} />
                </div>
                <div className='entries-div'>
                    <p className='no-entries-text'>No entries yet! Start a <span className='new-entry-text'>New Entry</span> to begin.</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;