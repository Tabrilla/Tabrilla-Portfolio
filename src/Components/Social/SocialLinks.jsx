import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonCheckFill, BsFacebook } from 'react-icons/bs'



const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} /> 
                </>
            ),
            href: '/',
            style: 'rounded-tr-md',
        },

        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={25} /> 
                </>
            ),
            href: '/',
        },

        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={25} /> 
                </>
            ),
            href: '/',
        },

        {
            id: 4,
            child: (
                <>
                     Resume <BsFillPersonCheckFill size={25} />
                </>
            ),
            href: '/'
          
        },

        {
            id: 5,
            child: (
                <>
                    Facebook <BsFacebook size={25} /> 
                </>
            ),
            href: '/',
            style: 'rounded-br-md',
        },
    ]


    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 py-2 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )    
}

export default SocialLinks