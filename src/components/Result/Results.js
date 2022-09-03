import React from 'react';
import Analysis from './Analysis';
import Summary from './Summary';

const Results = () => {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto my-10 px-6 md:px-8 xl:px-10">
                <Summary></Summary>

                <h1 className='font-semibold text-2xl md:text-3xl md:pb-1'>Question Analysis</h1>
                <h4 className='font-semibold text-base text-gray-400 py-2 border-b-2'>You answerd 5 out of 10 questions correctly</h4>

                <Analysis></Analysis>
                <Analysis></Analysis>
                <Analysis></Analysis>
            </div>
        </main>
    );
};

export default Results;