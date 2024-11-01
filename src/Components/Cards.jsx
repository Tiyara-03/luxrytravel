import React from 'react'
import Bali from '../Assets/Bali.jpg'
import Maldives from '../Assets/Maldives.jpg'
import VietNam from '../Assets/Vietnam.jpg'
import Philip from '../Assets/phillip.jpg'
import Dubai from '../Assets/dubai.jpg'
import India from '../Assets/india.jpg'

export default function Cards() {
    return (
        <div className='bg-white pt-10 pb-10'>
            <div className='pb-20 pt-4'>
                <h1 className='flex justify-center items-center text-black text-4xl'>Top Trending Destination</h1>
            </div>

            <div className=' gap-8 grid grid-cols-1 md:grid-cols-2 place-items-center xl:mx-32'>
                <div className='w-[20rem] h-[20rem] lg:w-[30rem] hover:scale-105 duration-300 relative' style={{ backgroundImage: `url(${Bali})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-2'>
                        <h1 className=' text-3xl text-white'>Bali</h1>
                    </div>
                </div>

                <div className='w-[20rem] h-[20rem] lg:w-[30rem] hover:scale-105 duration-300 relative' style={{ backgroundImage: `url(${VietNam})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-2'>
                        <h1 className='flex flex-col justify-end items-center text-3xl text-white'>Vietnam</h1>
                    </div>

                </div>

                <div className='w-[20rem] h-[20rem] lg:w-[30rem] hover:scale-105 duration-300 relative' style={{ backgroundImage: `url(${Philip})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-2'>
                        <h1 className='flex flex-col justify-end items-center text-3xl text-white'>Philipines</h1>
                    </div>

                </div>

                <div className='w-[20rem] h-[20rem] lg:w-[30rem] hover:scale-105 duration-300 relative' style={{ backgroundImage: `url(${Maldives})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-2'>
                        <h1 className='flex flex-col justify-end items-center text-3xl text-white'>Maldives</h1>
                    </div>
                </div>

                <div className='w-[20rem] h-[20rem] lg:w-[30rem] hover:scale-105 duration-300 relative' style={{ backgroundImage: `url(${Dubai})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-2'>
                        <h1 className='flex flex-col justify-end items-center text-3xl text-white'>Dubai</h1>
                    </div>
                </div>

                <div className='w-[20rem] h-[20rem] lg:w-[30rem] hover:scale-105 duration-300 relative' style={{ backgroundImage: `url(${India})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-2'>
                        <h1 className='flex flex-col justify-end items-center text-3xl text-white'>India</h1>
                    </div>
                </div>
            </div>

            <div className='pt-20 flex justify-center items-center'>
                <button className='px-2 py-1 bg-navbg text-xl hover:scale-105 duration-300 lg:text-2xl'>View All Destination</button>
            </div>

        </div>
    )
}
