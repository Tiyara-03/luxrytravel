import React from 'react'
// import Balibg from '../Assets/Balibg.jpg'
import Balibg2 from '../Assets/Balibg2.jpg'
import 'remixicon/fonts/remixicon.css'



export default function Home() {
  return (
    <div className='h-screen pt-[10rem]' style={{ backgroundImage: `url(${Balibg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      <h1 className='text-[12rem] md:text-[17rem] text-black flex flex-col justify-center items-center lg:items-end lg:pr-16'>BALI</h1>

      <div className='flex flex-col gap-4 justify-end items-end pr-12'>
        <i className="ri-phone-fill text-4xl py-1 px-1 border-2 rounded-full bg-black text-white flex justify-end items-end"></i>
        <i class="ri-chat-3-fill text-4xl py-1 px-1 border-2 rounded-full bg-black text-white flex justify-end items-end"></i>
      </div>
    </div>
  )
}