import React from 'react';
import { Link } from 'react-router-dom';
import './ProgressBar.css';


const ProgressBar = () => {
    return (
        <div className="min-w-full h-16 bg-white border rounded-md px-4">
            <div className='w-full h-full grid justify-center items-center grid-cols-12 gap-2'>
                <div className="col-start-1 col-span-2 lg:col-span-1">
                    <span className="w-full flex justify-center items-center material-icons-outlined border rounded-md bg-green-100 py-3 mx-auto hover:bg-green-300"> arrow_back </span>
                </div>
                <div className="w-full mx-auto relative col-start-3 col-span-8 lg:col-start-2 lg:col-span-9">
                    <div className="tooltip">24% Cimplete!</div>
                    <div className="w-full h-1 mx-auto bg-slate-300 border-none outline-none rounded-3xl">
                        <div className="progress h-1 rounded-3xl relative" style={{ width: "20%" }}></div>
                    </div>
                </div>
                <Link to="/result" className='col-start-11 col-span-2'>
                    <button className="w-full button next flex justify-center items-center border rounded-md bg-green-300 py-3 hover:bg-green-500 font-medium ">
                        <span className='hidden lg:block'>Next Question</span>
                        <span className="material-icons-outlined "> arrow_forward </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProgressBar;