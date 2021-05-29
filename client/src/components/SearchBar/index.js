import React from 'react';
import { Search } from 'react-bootstrap-icons';
import './index.css';

function SearchBar({
    searchTerm,
    setSearchTerm,
    startSearch
}) {
    return (
        <div className="lf_search">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for Topic" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <div className="lf_search-icon">
                    <button type="submit" onClick={startSearch}><Search /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;