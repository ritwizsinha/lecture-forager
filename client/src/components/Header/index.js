import React from 'react';
import { Link } from 'react-router-dom';

import ButtonUI from '../Button';
import SearchBar from '../SearchBar';
import './index.css';

function Header({
    searchTerm,
    setSearchTerm,
    startSearch
}) {
    return (
        <div className="lf_header-container">
            <div className="lf_header-logo">
                <Link
                    to={{
                        pathname: '/',
                    }}
                >
                    LF
                </Link>
            </div>
            <div className="lf_search-container">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} startSearch={startSearch}/>
            </div>
            <div className="lf_buttons-container">
                <Link to={{
                    pathname: '/upload'
                }}>
                    <ButtonUI
                        backgroundColor="#fff"
                        text="Upload"
                        textColor="#000"
                        width="100px"
                    />
                </Link>

            </div>
        </div>
    )
}

export default Header;