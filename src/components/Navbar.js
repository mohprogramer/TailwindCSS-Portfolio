import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = ({setDark , dark}) => {
    return (
        <div className='flex justify-between items-center p-8 bg-slate-400 md:px-20 lg:px-40 dark:text-white dark:bg-gray-900'>
            <h1 className='font-burtons text-xl'>CallMeMo</h1>
            <ul className='flex justify-between items-center'>
                <li onClick={() =>setDark(!dark)} className='mr-8 cursor-pointer'><BsFillMoonStarsFill  /></li>
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