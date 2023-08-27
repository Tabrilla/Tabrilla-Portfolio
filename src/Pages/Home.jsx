import React from 'react'
import heroro from '../assets/Heroro.jpg'
import {RiArrowRightSLine} from 'react-icons/ri'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <>
      <section>

        <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

          <div className='max-w-screen-lg px-8  flex flex-col md:flex-row  mx-auto h-screen justify-center items-center'>

           
              <div className='mt-20 md:mt-10 rounded-full border-4 border-gray-500'>
                  <img src={heroro} className='w-[100px] sm:w-[200px] md:w-[500px]' alt="my profile"/>
              </div>

              <div className='px-5 py-1  mt-4 md:mt-10'>
                <h1 className='text-3xl md:text-4xl font-bold text-white font-signature1'>Hi, My name is Angeles - Full Stack Developer</h1>
                
                <p className='text-white py-4 max-w-lg'>
                  I'm pursuing a BSIT degree with 4 years of hands-on coding experience. I've explored multiple languages and projects, refining my skills and deepening my IT knowledge. This mix of academia and practical coding provides a solid foundation for success in the IT field.                </p>

                <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                  Portfolio
                  <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={25} className='ml-1' /></span>
                </Link>       
              </div>
            

          </div>

        </div>

      </section>

    </>
  )
}

export default Home