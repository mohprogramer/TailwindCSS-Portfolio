import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-8 bg-slate-400'>
            <h1 className='font-burtons text-xl'>CallMeMo</h1>
            <ul className='flex justify-between items-center'>
                <li className='mr-8'><BsFillMoonStarsFill /></li>
                <li >
                    <a 
                    className='bg-gradient-to-r from-cyan-400 to-teal-400 py-2 px-4 rounded-md cursor-pointer text-white'
                    href="#"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;