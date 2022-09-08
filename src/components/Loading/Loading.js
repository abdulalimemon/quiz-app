import React from 'react';
import { Bars } from 'react-loader-spinner';


const Loading = () => {
    return (
        <div className="min-h-screen">
            <div className='container mx-auto'>
                <div className='loading-height flex items-end justify-center'>
                    <Bars
                        height="80"
                        width="80"
                        color="#2B393F"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loading;