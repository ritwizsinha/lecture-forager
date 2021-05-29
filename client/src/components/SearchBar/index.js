import React from 'react';
import { Search } from 'react-bootstrap-icons';
import './index.css';

function SearchBar() {
    return (
        <div className="lf_search">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for Topic" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="lf_search-icon">
                    <button type="submit"><Search /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;