import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import './index.css';
import { Link } from 'react-router-dom';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="lf_search">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for Topic" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="lf_search-icon">
                    <Link to={{
                        pathname: `/list`,
                        state: {
                            searchTerm
                        }
                    }}>
                        <button type="submit"><Search /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;