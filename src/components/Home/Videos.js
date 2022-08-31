import React from 'react';
import Video from './Video';

const Videos = () => {
    return (
        <div className='gap-5 py-10 grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
        </div>
    );
};

export default Videos;