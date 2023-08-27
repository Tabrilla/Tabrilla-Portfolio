import React from 'react'
import java from '../assets/Experience/java.png'
import html from '../assets/Experience/html.png'
import css from '../assets/Experience/css.png'
import javascript from '../assets/Experience/javascript.png'
import github from '../assets/Experience/github.png'
import tailwind from '../assets/Experience/tailwind.png'
import react from '../assets/Experience/react.png'
import vite from '../assets/Experience/vite.png'
import firebase from '../assets/Experience/firebase.png'
import mongoDB from '../assets/Experience/mongoDB.png'


const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: java,
            title: 'JAVA',
            style: 'shadow-white'
        },

        {
            id: 2,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },

        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },

        {
            id: 4,
            src: javascript,
            title: 'JAVSCRIPT',
            style: 'shadow-yellow-500'
        },

        {
            id: 5,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },

        {
            id: 6,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-500'
        },

        {
            id: 7,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-500'
        },

        {
            id: 8,
            src: vite,
            title: 'VITE+REACT',
            style: 'shadow-orange-500'
        },

        {
            id: 9,
            src: firebase,
            title: 'FIREBASE',
            style: 'shadow-red-500'
        },

        {
            id: 10,
            src: mongoDB,
            title: 'MONGODB',
            style: 'shadow-green-500'
        },
    ]


  return (
    <div name='Experience' className='font-signature1 w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg w-full h-full mx-auto p-4 flex flex-col justify-center'>
            <div className='mt-10'>
                <p className='p-1 text-4xl font-bold inline border-b-4 border-l-gray-500'>
                    My experience
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                { experiences.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src}  alt="my logo" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}

            </div>
        </div>

    </div>
  )
}

export default Experience