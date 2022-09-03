import React from 'react';
import Success from '../../assets/images/success.png';

const Summary = () => {
    return (
        <div className="mx-5 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
            <div className="flex justify-center">
                <p className="text-xl font-semibold">
                    Your score is <br />
                    5 out of 10
                </p>
            </div>

            <div className="flex justify-center h-72">
                <img className='h-full' src={Success} alt="Success" />
            </div>
        </div>
    );
};

export default Summary;