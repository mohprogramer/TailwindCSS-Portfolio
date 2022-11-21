import React from 'react';
//Icons
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
//Image
import deved from '../assets/dev-ed-wave.png'
import design from '../assets/design.png';
import code from '../assets/code.png';
import consulting from '../assets/consulting.png';
import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';
import web4 from '../assets/web4.png';
import web5 from '../assets/web5.png';
import web6 from '../assets/web6.png';


const Main = () => {
    return (
        <div className='p-10 md:px-20 lg:px-40'>
            <div className='text-center'>
                <h1 className='text-5xl font-medium text-teal-500 mb-5 md:text-6xl'>Mohammad Davodi</h1>
                <h2 className='text-3xl font-medium mb-3 md:text-4xl'>Front-end developer.</h2>
                <p className='leading-8 text-gray-800 md:text-xl md:mt-2 max-w-md mx-auto'>Freelancer provider services for programming contect needs. Join me down below and let's get cracking!</p>
            </div>
            <div className='text-5xl text-gray-600  flex justify-center mt-10 gap-16'>
                <AiFillTwitterCircle className='cursor-pointer' />
                <AiFillLinkedin className='cursor-pointer' />
                <AiFillYoutube className='cursor-pointer' />
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:w-100 md:h-100 overflow-hidden'>
                <img src={deved} alt="deved" className='object-cover w-full h-full  '/>
            </div>
            <div >
                <h3 className='font-medium text-3xl text-gray-600'>Services I offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
                </p>
                <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
                </p>
            </div>
            <div className='md:flex gap-5 lg:gap-10'>
                <div className='text-center shadow-lg rounded-xl p-10 my-10'>
                    <img src={design} alt="desing" className='w-23 h-23 m-auto'/>
                    <h3 className='font-medium text-lg pt-8 pb-5'>Beautiful Designs</h3>
                    <p className='pb-4'>
                        Creating elegant designs suited for your needs following core
                        design theory.
                    </p>
                    <h4 className='text-teal-500 pb-3'>Design Tools I Use</h4>
                    <p className='py-1 text-gray-800'>Photoshop</p>
                    <p className='py-1 text-gray-800'>Illustrator</p>
                    <p className='py-1 text-gray-800'>Figma</p>
                    <p className='py-1 text-gray-800'>Indesign</p>
                </div>
                <div className='text-center shadow-lg rounded-xl p-10 my-10'>
                    <img src={code} alt="code" className='w-23 h-23 m-auto'/>
                    <h3 className='font-medium text-lg pt-8 pb-5'>Beautiful Designs</h3>
                    <p className='pb-4'>
                        Creating elegant designs suited for your needs following core
                        design theory.
                    </p>
                    <h4 className='text-teal-500 pb-3'>Design Tools I Use</h4>
                    <p className='py-1 text-gray-800'>Photoshop</p>
                    <p className='py-1 text-gray-800'>Illustrator</p>
                    <p className='py-1 text-gray-800'>Figma</p>
                    <p className='py-1 text-gray-800'>Indesign</p>
                </div>
                <div className='text-center shadow-lg rounded-xl p-10 my-10'>
                    <img src={consulting} alt="consulting" className='w-23 h-23 m-auto'/>
                    <h3 className='font-medium text-lg pt-8 pb-5'>Beautiful Designs</h3>
                    <p className='pb-4'>
                        Creating elegant designs suited for your needs following core
                        design theory.
                    </p>
                    <h4 className='text-teal-500 pb-3'>Design Tools I Use</h4>
                    <p className='py-1 text-gray-800'>Photoshop</p>
                    <p className='py-1 text-gray-800'>Illustrator</p>
                    <p className='py-1 text-gray-800'>Figma</p>
                    <p className='py-1 text-gray-800'>Indesign</p>
                </div>
            </div>
            <div className=' lg:grid-cols-2 gap-10 grid grid-cols-1'>
                <div >
                    <img src={web1} alt="web1" className='rounded-lg object-cover w-full h-full'/>
                </div>
                <div>
                    <img src={web2} alt="web2" className='rounded-lg w-full h-full object-cover'/>
                </div>
                <div >
                    <img src={web3} alt="web3" className='rounded-lg w-full h-full object-cover'/>
                </div>
                <div>
                    <img src={web4} alt="web4" className='rounded-lg object-cover w-full h-full'/>
                </div>
                <div >
                    <img src={web5} alt="web5" className='rounded-lg object-cover w-full h-full'/>
                </div>
                <div >
                    <img src={web6} alt="web6" className='rounded-lg object-cover w-full h-full'/>
                </div>
            </div>
        </div>
    );
};

export default Main;