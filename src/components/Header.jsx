import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ThinkIndialogo='https://pbs.twimg.com/profile_images/1377154269086814209/fnxLite1_400x400.jpg';
const NITPLogo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGZCk2pgkCNIbk6yL2r1a4z0Irk6hOjhESQ&s';

const Header = () => {
    const [open, setOpen] = useState(false); 

  
    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <header>
            <nav className='h-[100px] bg-[#222831] shadow-white shadow-lg flex items-center justify-between px-4 fixed w-full top-0 z-50 '>
                <div className='flex items-center'>
                    <img className='rounded-full' src={ThinkIndialogo} alt="ThinkIndialogo" width='50px' />
                    <img className='rounded-full ml-2' src={NITPLogo} width='50px' />
                    <span className='text-[#F96D00] font-semibold pl-3 text-md'>
                        THINK INDIA NIT PATNA<br />
                        थिंक इंडिया एनआईटी पटना
                    </span>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className='md:hidden flex items-center text-[35px] text-[#F96D00]'>
                    <button className='focus:outline-none' onClick={toggleMenu}>
                        &#9776;
                    </button>
                </div>

                <div className='hidden md:flex justify-center'>
                    <ul className='flex space-x-24 text-white text-md font-semibold '>
                        <li>
                            <NavLink 
                                to="/" 
                                exact 
                                className={({ isActive }) => isActive ? "text-[#F96D00] font-semibold" : ""}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => isActive ? "text-[#F96D00] font-semibold" : ""}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/teams" 
                                className={({ isActive }) => isActive ? "text-[#F96D00] font-semibold" : ""}
                            >
                                Teams
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/events" 
                                className={({ isActive }) => isActive ? "text-[#F96D00] font-semibold" : ""}
                            >
                                Events
                            </NavLink>
                        </li>
                    </ul>
                </div>

             
                <div className='hidden md:flex items-center'>
                    <button className=' bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-2xl'>Get Started</button>
                </div>
            </nav>

           
            {open && (
                <div className='lg:hidden fixed top-0 left-0 h-screen w-[70%] bg-gray-800  shadow-lg transform transition-transform duration-300 ease-in-out z-30 mt-[100px] py-10 px-10 '>
                    <ul>
                        <li className=' border-l-4 border-orange-600 text-white px-2'><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                        <li className=' border-l-4 border-orange-600 text-white px-2 my-3'><NavLink to="/about" onClick={toggleMenu}>About Us</NavLink></li>
                        <li className=' border-l-4 border-orange-600 text-white px-2 my-3'><NavLink to="/teams" onClick={toggleMenu}>Teams</NavLink></li>
                        <li className=' border-l-4 border-orange-600 text-white px-2 my-3'><NavLink to="/events" onClick={toggleMenu}>Events</NavLink></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
