import React from 'react';
import Videos from './Videos';


const Home = () => {
    return (
        <main className='min-h-screen'>
            <div className="container mx-auto py-5 px-4 md:px-10">
                <Videos></Videos>
            </div>
        </main>
    );
};

export default Home;