import React from 'react';

import ButtonUI from '../Button';
import SearchBar from '../SearchBar';
import './index.css';

function Header() {
    return (
        <div className = "lf_header-container">
            <div className="lf_header-logo">
                LF
            </div>
            <div className="lf_search-container">
                <SearchBar />
            </div>
            <div className="lf_buttons-container">
                <ButtonUI
                    backgroundColor="#fff"
                    text="Upload"
                    textColor="#000"
                    width="120px"
                />
            </div>
        </div>
    )
}

export default Header;