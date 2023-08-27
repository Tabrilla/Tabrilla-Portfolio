import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'

const NavBar = () => {

    // FOR HAMBURGER
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    // SMOOTH SCROLL
    const links = [
        {
            id: 1,
            link: 'Home'
        },

        {
            id: 2,
            link: 'About'
        },

        {
            id: 3,
            link: 'Portfolio'
        },

        {
            id: 4,
            link: 'Experience'
        },

        {
            id: 5,
            link: 'Contact'
        },

    ]

  return (
    <>
        <section>
            <div className='flex justify-between items-center w-full h-20 bg-black py-4 px-10 fixed'>

                <div>
                    <h1 className='font-mono text-4xl font-bold text-white font-signature'>Tabrilla</h1> 
                </div>

                <ul className='hidden lg:flex'>

                    {links.map(({ id, link }) => (
                        <li key={id} className='text-white  cursor-pointer font-bold 
                        font-signature1'>
                            
                            <Link to={link} className='p-4 rounded-lg hover:text-black hover:bg-white' smooth duration={500}>{link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div onClick={handleNav} className='text-white p-2 z-10 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-500 block lg:hidden'>    
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div> 
                
                {nav && ( 
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                     {links.map(({ id, link }) => ( 
                        <li key={id} className='px-4 py-6 text-4xl text-white cursor-pointer font-bold font-signature1'>
                            
                            <Link onClick={() => handleNav(!nav)} to={link} className='p-4 rounded-lg hover:text-black hover:bg-white' smooth duration={500}>{link}
                            </Link>
                        </li>
                     ))}
                    </ul>
                )}
               
                
            </div>
        </section>
        
    </>
   

  )
}

export default NavBar