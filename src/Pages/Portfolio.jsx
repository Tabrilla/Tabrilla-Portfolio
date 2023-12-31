import React from 'react'
import arrayDestruct from '../assets/arrayDestruct.jpg'
import installNode from '../assets/installNode.jpg'
import navbar from '../assets/navbar.jpg'
import reactSmooth from '../assets/reactSmooth.jpg'
import reactWeather from '../assets/reactWeather.jpg'
import useState from '../assets/usestate.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },

        {
            id: 2,
            src: installNode
        },

        {
            id: 3,
            src: navbar
        },

        {
            id: 4,
            src: reactSmooth
        },

        {
            id: 5,
            src: reactWeather
        },

        {
            id: 6,
            src: useState
        },
        
    ]

  return (
    <div name='Portfolio' className='font-signature1 bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
        
        <div className='max-w-screen-lg w-full h-full p-4 mx-auto justify-center flex flex-col'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id, src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} className='rounded-md duration-200 hover:scale-105' alt="" />
        
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> DEMON </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> CODE </button>
                        </div>
                    </div>
                    
                ))}
          
            </div>

        </div>
    </div>
  )
}

export default Portfolio