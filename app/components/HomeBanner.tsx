import React from 'react';
import Image from 'next/image';
import bannerImage from '../../public/assets/banner-image.png'

const HomeBanner = () => {
  return (
    <div className='relative bg-gradient-to-r from-orange-500 to-purple-700 mb-8'>
        <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
            <div className='mb-8 md:mb-0 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Summer Sales</h1>
                <p className='text-lg md:text-xl text-white mb-2'>Enjoy discounts on selected Items</p>
                <p className='text-2xl md:text-5xl text-yellow-400 font-bold'>GET 50% OFF</p>
            </div>
            <div className='w-1/3 relative aspect-video'>
                <Image 
                  src={bannerImage}
                  alt="Banner Image"
                  layout="fill"
                  objectFit="contain"
                  className="object-contain"
                />
            </div>
        </div>
    </div>
  );
};

export default HomeBanner;
