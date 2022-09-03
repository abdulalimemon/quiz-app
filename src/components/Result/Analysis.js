import React from 'react';
import Options from '../Quiz/Options';

const Analysis = () => {
    return (
        <div className='mt-3 mb-3 md:mt-5 md:mb-5 lg:mt-6 lg:mb-8'>
            <div className='p-3 bg-white mt-5 rounded-md'>
                <div class="flex items-center text-base font-semibold mb-5">
                    <span class="material-icons-outlined text-green-500 mr-2"> help_outline </span>
                    Here goes the question from Learn with Sumit?
                </div>
                <Options></Options>
            </div>
        </div>
    );
};

export default Analysis;