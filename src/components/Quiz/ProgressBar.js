import React from 'react';
import './ProgressBar.css';


const ProgressBar = () => {
    return (
        <div className="min-w-full h-16 bg-white border rounded-md px-4">
            <div className='w-full h-full grid justify-center items-center grid-cols-12 gap-2'>
                <div className="col-start-1 col-span-2">
                    <span className="w-full flex justify-center items-center material-icons-outlined border rounded-md bg-green-100 py-3 mx-auto hover:bg-green-300"> arrow_back </span>
                </div>
                <div className="rangeArea col-start-3 col-span-8">
                    <div className="tooltip">24% Cimplete!</div>
                    <div className="rangeBody">
                        <div className="progress" style={{ width: "20%" }}></div>
                    </div>
                </div>
                <a href="result.html" className='col-start-11 col-span-2'>
                    <button className="w-full button next flex justify-center items-center border rounded-md bg-green-300 py-3 hover:bg-green-500 font-medium ">
                        <span>Next Question</span>
                        <span className="material-icons-outlined "> arrow_forward </span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProgressBar;