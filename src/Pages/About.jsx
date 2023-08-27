import React from 'react'

const About = () => {
  return (
    <div name='About' className='font-signature1 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      
      <div className='max-w-screen-lg h-full p-4 mx-auto flex flex-col justify-center'>
          
        <div className='max-w-screen-lg w-full grid grid-cols-2 gap-8'>
            
            <div className='sm:text-left pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
              </p>
            </div>

            <div></div>
        </div>

        <div className='max-w-screen-lg w-full grid sm:grid-cols-2 gap-8 px-4'>

          <div className='sm:text-left text-5xl font-bold'>
            <p>Hello, I'm Angeles Tabrilla. I'm glad to meet you.</p>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique dolore dolorem possimus, voluptate placeat quaerat alias quidem odio sed. Cumque, delectus? Nobis exercitationem quasi sapiente impedit corporis, culpa molestiae!</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About