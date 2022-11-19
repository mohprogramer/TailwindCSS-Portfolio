import React from 'react';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import deved from '../assets/dev-ed-wave.png'

const Main = () => {
    return (
        <div className='p-10'>
            <div>
                <h1 className='text-5xl font-medium text-teal-500 mb-5'>Mohammad Davodi</h1>
                <h2 className='text-3xl font-medium mb-3'>Front-end developer.</h2>
                <p className='leading-8 text-gray-800'>Freelancer provider services for programming contect needs. Join me down below and let's get cracking!</p>
            </div>
            <div className='text-5xl text-gray-600  flex justify-center mt-10 gap-16'>
                <AiFillTwitterCircle className='cursor-pointer' />
                <AiFillLinkedin className='cursor-pointer' />
                <AiFillYoutube className='cursor-pointer' />
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
                <img src={deved} alt="deved" className='object-cover w-full h-full'/>
            </div>
        </div>
    );
};

export default Main;