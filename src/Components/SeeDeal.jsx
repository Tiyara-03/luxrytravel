import React from 'react'
import Beach from '../Assets/Beach.jpg'
import Sea from '../Assets/Sea.jpg'


export default function SeeDeal() {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row gap-8 py-14 mx-auto'>
      <div className='w-[40rem] h-[20rem] flex justify-center hover:scale-110 duration-300' style={{ backgroundImage: `url(${Beach})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex flex-col justify-end items-end pb-4'>
          <h1 className=' text-2xl text-white px-2 py-1 bg-blue-400 hover:bg-blue-600 duration-300'>See Deal</h1>
        </div>
      </div>

      <div className='w-[40rem] h-[20rem] flex justify-center hover:scale-110 duration-300' style={{ backgroundImage: `url(${Sea})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex flex-col justify-end items-end pb-4'>
          <h1 className='text-2xl text-white px-2 py-1 bg-blue-400 hover:bg-blue-600'>See Deal</h1>
        </div>
      </div>
    </div>
  )
}
