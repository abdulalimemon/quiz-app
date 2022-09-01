import React from 'react';
import { Link } from "react-router-dom";
import avatar from '../../assets/images/avatar.png'

const Account = () => {
    return (
        <div className='flex flex-row items-center'>
            <span className="mr-3 w-7 h-7" title="Account">
                <img src={avatar} />
            </span>
            <Link to="/signup" className='font-medium'>Sign Up</Link>
            {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
        </div>
    );
};

export default Account;