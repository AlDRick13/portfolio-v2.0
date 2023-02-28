import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="bg-primary h-screen mb-5 ">
                <main>{children}</main>

            </div>
        </>
    );
};

export default Layout;
