import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function PageWrapper({
    children
}) {
    return (
        <div>
            <Header />
            <div className="container" style={{
                minHeight: '100vh',
                marginTop: '80px'
            }}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}


export default PageWrapper;