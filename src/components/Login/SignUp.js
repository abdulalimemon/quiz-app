import React from 'react';
import avatar from '../../assets/images/login.gif';

const SignUp = () => {
    return (
        <main className="2xl:min-h-screen">
            <div className="container mx-auto py-5">
                <h1 className='my-8 font-bold text-2xl text-center md:text-left md:text-4xl md:ml-10 text-gray-700'>Create an account</h1>
                <div className="gap-5 pb-10 grid sm:grid-cols-1  md:grid-cols-2">
                    <div className="flex justify-center">
                        <img className='px-5' src={avatar} alt='Sign up' />
                    </div>
                    <form className="flex justify-start content-center" action="#">
                        <div className="textInput">
                            <input type="text" placeholder="Enter name" />
                            <span className="material-icons-outlined"> person </span>
                        </div>

                        <div className="textInput">
                            <input type="text" placeholder="Enter email" />
                            <span className="material-icons-outlined"> alternate_email </span>
                        </div>

                        <div className="textInput">
                            <input type="password" placeholder="Enter password" />
                            <span className="material-icons-outlined"> lock </span>
                        </div>

                        <div className="textInput">
                            <input type="password" placeholder="Confirm password" />
                            <span className="material-icons-outlined"> lock_clock </span>
                        </div>

                        <label>
                            <input type="checkbox" />
                            <span>I agree to the Terms & Conditions</span>
                        </label>

                        <div className="button">
                            <span>Submit now</span>
                        </div>

                        <div className="info">
                            Already have an account? <a href="login.html">Login</a> instead.
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignUp;