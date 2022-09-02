import React from 'react';
import { Link } from 'react-router-dom';
import imgvideo from '../../assets/images/3.jpg';


const Video = () => {
    return (
        <Link to="/quiz">
            <div className="border rounded  p-4 shadow-xl bg-white ">
                <img className='w-full h-48 mx-auto' src={imgvideo} alt="" />
                <p className='py-2 font-semibold'>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className="flex flex-row justify-between items-center font-medium">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </Link>
    );
};

export default Video;