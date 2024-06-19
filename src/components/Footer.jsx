import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='bg-[#222831] w-full'>
            <div className=' lg:flex py-5 lg:justify-evenly'>

                <div className='px-4 lg:px-2 text-center lg:text-left lg:items-center'>
                    <div className='flex items-center justify-center lg:flex space-x-2 '>
                        <img src="https://media.licdn.com/dms/image/C4D0BAQGRneY6b4SAmQ/company-logo_200_200/0/1677645694453?e=2147483647&v=beta&t=ZdNU1l5N-Gjoc2B9S7lNvcx9O4v06cQUyhZNFWZQZEc" alt="Think India NITP" className='hidden lg:block rounded-full w-14' />
                        <span className='text-white font-semibold'>THINK INDIA <br />NITP</span>
                    </div>
                    <p className='text-white py-3 text-sm text-center '>Think India is one of the best <br/>organizations of NITP with branches in major colleges.</p>
                    <div className='flex space-x-3 justify-center lg:justify-center'>
                        <FontAwesomeIcon className='lg:text-3xl' icon={['fab', 'instagram']} size='xl' style={{ color: '#E4405F' }} />
                        <FontAwesomeIcon className='lg:text-3xl' icon={['fab', 'linkedin-in']} size='xl' style={{ color: '#0077B5' }} />
                        <FontAwesomeIcon className='lg:text-3xl' icon={['fab', 'twitter']} size='xl' color='black' />
                        <FontAwesomeIcon className='lg:text-3xl' icon={['fab', 'facebook']} size='xl' color='blue' />
                    </div>
                </div>

                <div className='px-4 lg:px-2 text-center lg:text-left'>
                    <h1 className='text-white border-l-4 border-orange-400 px-2'>Important Links</h1>
                    <ul className='text-white mt-2'>
                        <li>Events</li>
                        <li>About Us</li>
                        <li>Teams</li>
                        <li>Home</li>
                        <li>Gallery</li>
                    </ul>
                </div>

                <div className='px-4 lg:px-2 text-center lg:text-left'>
                    <h1 className='text-white border-l-4 border-orange-400 px-2'>Contact Us</h1>
                    <p className='text-white mt-2'>Ashok Rajpath, Patna<br />Bihar-800005, India</p>
                    <p className='text-white'>Phone: +91-975794974</p>
                    <p className='text-white'>Email: thinkindia@nitp.ac.in</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
