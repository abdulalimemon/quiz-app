import React from 'react';


const Account = () => {
    return (
        <div className='flex flex-row items-center'>
            <span className="material-icons-outlined mr-3" title="Account">
                account_circle
            </span>
            <a href="signup.html" className='font-medium'>Signup</a>
            {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
        </div>
    );
};

export default Account;