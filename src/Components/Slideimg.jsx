import React from 'react'
import france from '../Assets/francs.jpg'
import greece from '../Assets/greece.jpg'
import rome from '../Assets/Rome.jpg'
import thailand from '../Assets/thailand.jpg'
import tokyo from '../Assets/hongkond.jpg'
import egypt from '../Assets/egypt.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-7xl  text-white rounded-full p-2'
            onClick={onClick}
        >
            &gt;
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-7xl text-white rounded-full p-2'
            onClick={onClick}
        >
            &lt;
        </div>
    );
};

const imageList = [
    {
        id: 1,
        img: france,
    },
    {
        id: 2,
        img: rome,
    },
    {
        id: 3,
        img: greece,
    },
    {
        id: 4,
        img: thailand,
    },
    {
        id: 5,
        img: tokyo,
    },
    {
        id: 6,
        img: egypt,
    },
]

export default function Slideimg() {

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
    return(
        <div>
            <Slider {...settings}>
                {imageList.map((data) => (
                <div className='h-[70vh]'>
                    <img src={data.img} alt="na" className='w-full h-full'/>
                </div>
                ))}
            </Slider>
        </div>
    )
}
