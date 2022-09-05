import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import github from '../../assets/images/github2.png';
import google from '../../assets/images/google.png';
import avatar from '../../assets/images/Sign-up.png';
import auth from '../../firebase.init';






const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
    }
    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-5">
                <h1 className='my-8 font-bold text-2xl text-center md:text-left md:text-4xl md:ml-10 text-gray-700'>Create an account</h1>
                <div className="gap-5 pb-10 grid sm:grid-cols-1  md:grid-cols-2">
                    <div className="flex justify-center">
                        <img className='px-5' src={avatar} alt='Sign up' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <form onSubmit={handleSubmit} className="gap-5 grid grid-cols-1 mx-auto px-5 md:m-0 md:pr-10 w-full" action="#">
                            <div className="w-full h-12 flex items-center border p-1 rounded-md border-slate-500 bg-white">
                                <input ref={nameRef} type="text" className='border-none outline-none	w-full h-full py-1 px-2 font-semibold' placeholder="Enter name" />
                                <span className="material-icons-outlined w-10 h-10 flex items-center justify-center"> person </span>
                            </div>

                            <div className="w-full h-12 flex items-center border p-1 rounded-md border-slate-500 bg-white">
                                <input ref={emailRef} className='border-none outline-none	w-full h-full py-1 px-2 font-semibold' type="text" placeholder="Enter email" />
                                <span className="material-icons-outlined w-10 h-10 flex items-center justify-center"> alternate_email </span>
                            </div>

                            <div className="w-full h-12 flex items-center border p-1 rounded-md border-slate-500 bg-white">
                                <input ref={passwordRef} className='border-none outline-none	w-full h-full py-1 px-2 font-semibold' type="password" placeholder="Enter password" />
                                <span className="material-icons-outlined w-10 h-10 flex items-center justify-center"> lock </span>
                            </div>

                            <div className="w-full h-12 flex items-center border p-1 rounded-md border-slate-500 bg-white">
                                <input className='border-none outline-none	w-full h-full py-1 px-2 font-semibold' type="password" placeholder="Confirm password" />
                                <span className="material-icons-outlined w-10 h-10 flex items-center justify-center"> lock_clock </span>
                            </div>

                            <label>
                                <input className='mr-3' type="checkbox" />
                                <span>I agree to the Terms & Conditions</span>
                            </label>

                            <button className='w-full h-12 p-1'>
                                <span className="w-full h-12 rounded-md flex items-center justify-center cursor-pointer bg-green-400  hover:bg-slate-800 font-semibold hover:text-slate-100">Submit now</span>
                            </button>

                            <div>
                                <p>Already have an account? <Link to="/login" className='text-red-500'>Login</Link> instead.</p>
                            </div>
                            <div className='my-2'>
                                <div className='flex items-center justify-center' >
                                    <div className='border-b-2 w-1/4 lg:w-1/3 border-slate-300'></div>
                                    <div className='w-1/2 lg:w-1/3 flex justify-center font-medium'>Or Sign up With</div>
                                    <div className='border-b-2 w-1/4 lg:w-1/3 border-slate-300'></div>
                                </div>
                                <div className='my-3 flex'>
                                    <button className='w-full h-14 p-1'>
                                        <span className="w-full h-14 rounded-md flex items-center justify-center cursor-pointer  hover:bg-slate-200 border-2 border-slate-600">
                                            <img className='w-10 h-10' src={google} alt="Google" />
                                        </span>
                                    </button>
                                    <button className='w-full h-14 p-1'>
                                        <span className="w-full h-14 rounded-md flex items-center justify-center cursor-pointer  hover:bg-slate-200 border-2 border-slate-600">
                                            <img className='w-10 h-10' src={github} alt="Github" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;