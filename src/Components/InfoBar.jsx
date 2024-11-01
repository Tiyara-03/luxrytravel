import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navlinks from './Navlinks'

export default function InfoBar() {
  return (

    <>
      <div className='absolute w-full'>


        <div className='bg-gray-900 text-white w-full shadow-md py-2'>
          <div className='flex flex-row justify-end items-center gap-3 px-4'>
            <div>
              <i className="ri-phone-line text-4xl py-1 px-1 border-2 rounded-lg"></i>
            </div>

            <div className='flex flex-col items-center'>
              <div className='text-sm'>Call us: 9 am - 10 pm</div>
              <div className='font-bold text-xl'>1800-815-597</div>
            </div>

            <div className='text-3xl flex items-center'>
              |
            </div>

            <div>
              Support
            </div>
          </div>
        </div>

        {/* Navbar */}

        {/* <div className='w-full bg-gradient-to-b from-black to-transparent min-h-[120px] flex items-end pb-4 sticky top-0 z-50'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-end gap-12 text-white text-2xl px-14'>
            <a href="/#" className='hover:text-black hover:scale-105 duration-300' >Destination</a>
            <a href="/#" className='hover:text-black hover:scale-105 duration-300'>Holiday Types </a>
            <a href="/#" className='hover:text-black hover:scale-105 duration-300'>Exclusive Deals</a>
            <a href="/#" className='hover:text-black hover:scale-105 duration-300'>Blogs</a>
            <a href="/#" className='hover:text-black hover:scale-105 duration-300'>About Us</a>
            <a href="/#" className='hover:text-black hover:scale-105 duration-300'>Contact Us</a>
          </div>
        </div>
      </div> */}

        <nav className='w-full bg-gradient-to-b from-black to-transparent min-h-[120px] flex items-end pb-4'>
          <div className='container mx-auto'>
            <div className='hidden md:flex flex-row justify-end gap-8 lg:gap-12 text-white text-2xl px-14'>
              <Navlinks />
            </div> 


            {/* Mobile View */}
            <div className={` flex flex-col md:hidden text-white text-xl gap-4`}>
            <Navlinks />
            </div>
          </div>

        </nav>
      </div>

    </>
  )
}
