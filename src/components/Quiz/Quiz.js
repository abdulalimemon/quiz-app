import React from 'react';
import MiniPlayer from './MiniPlayer';
import Options from './Options';
import ProgressBar from './ProgressBar';

const Quiz = () => {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto my-10 px-6 md:px-8 xl:px-10">
                <h1 className='font-semibold text-3xl md:text-4xl pb-2'>Pick three of your favorite Star Wars Flims</h1>
                <h4 className='font-semibold text-base text-gray-400 py-2 border-b-2'>Question can have multiple answers</h4>

                <Options></Options>
                <div className='py-5 md:py-7 lg:py-10'></div>
                <ProgressBar></ProgressBar>
                
            </div>
        </main>
    );
};

export default Quiz;