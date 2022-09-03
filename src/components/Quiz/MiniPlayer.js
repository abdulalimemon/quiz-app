import React from 'react';
import pic from '../../assets/images/3.jpg'
const MiniPlayer = () => {
    return (
        <div className="floatingBtn w-80 bottom-24 right-12 bg-white p-3 box-border border border-slate-300 rounded-md z-50">
            <span className="material-icons-outlined open"> play_circle_filled </span>
            <span className="material-icons-outlined close"> close </span>
            <img src={pic} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;