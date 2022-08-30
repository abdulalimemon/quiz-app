import React from 'react';
import Videos from './Videos';


const Layout = () => {
    return (
        <main className='2xl:h-screen'>
            <div className="container mx-auto p-5 ">
                <Videos></Videos>
            </div>
        </main>
    );
};

export default Layout;